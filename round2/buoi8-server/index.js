const express = require('express')
const cors = require('cors');
const app = express()


app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello bạn đang truy cập vào api /")
})

const server = require("http").Server(app);


const io = require("socket.io")(server, {
    cors: {
        origin: '*',
    }
});

const rooms = {}
// room_id:[{id:ma,username:avbaca}}]
io.on('connection', function (socket) {

    socket.emit('greeting-from-server', {
        greeting: 'Hello Client'
    });

    socket.on('join_room', function (data) {
        console.log(data)
        const roomId = data.id
        if (rooms[roomId]) {
            rooms[roomId].push({
                id: socket.id,
                username: data.username
            })
        } else {
            rooms[roomId] = [{
                id: socket.id,
                username: data.username
            }]
        }
        socket.join(roomId)
    });

    socket.on('send_message', function (data) {
        const { chatText, id } = data
        socket.broadcast.to(id).emit("receive_message", {
            content: chatText,
            sender_id: socket.id,
            username: rooms[id].find(f => f.id == socket.id).username
        })
    })
});


server.listen(5000, () => {
    console.log("HOST is open in local host 5000")
});