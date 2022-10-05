var express = require('express'),
    app = express(),
    http = require('http'),
    socketIO = require('socket.io'),
    server, io;

server = http.Server(app);
server.listen(5000, () => {
    console.log("HOST is open in local host 5000")
});

io = socketIO(server);

io.on('connection', function (socket) {
    socket.emit('greeting-from-server', {
        greeting: 'Hello Client'
    });
    socket.on('greeting-from-client', function (message) {
        console.log(message);
    });
});