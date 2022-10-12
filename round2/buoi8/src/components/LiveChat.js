import './css/index.css'
import pic from "./images/chat-icon.png";
import menu from "./images/menu-tab.png";
import video from "./images/video-call.png";
import { useEffect, useState, useRef } from 'react'
import { io } from "socket.io-client";
import {
    useParams
} from "react-router-dom";
function LiveChat(props) {
    let { id } = useParams();
    const [chatHistory, setChatHistory] = useState([

    ])
    const chatHistoryRef = useRef([])
    const [socketState, setSocketState] = useState(null)
    const [chatText, setChatText] = useState("")
    const { username } = props
    useEffect(() => {
        if (id && id !== undefined) {
            const socket = io(":5000", {
                port: 5000
            });
            setSocketState(socket)
            socket.emit("join_room", {
                id,
                username
            })
            socket.on("receive_message", data => {

                chatHistoryRef.current.push({
                    content: data.content,
                    socket_id: data.sender_id,
                    username: data.username
                })
                setChatHistory([...chatHistoryRef.current])
            })
            return () => {
                socket.disconnect()
            }
        }
    }, [id])
    if (!id || id === undefined || socketState == null)
        return null

    const onSendMessage = () => {
        socketState.emit("send_message", { chatText, id })
        chatHistoryRef.current.push({
            content: chatText,
            socket_id: socketState.id,
            username
        })
        setChatHistory([...chatHistoryRef.current])
        setChatText("")
    }
    return (
        <div className=" bg-[#030511] flex w-full h-screen ">
            <div className="navigate flex flex-col py-[50px] items-center justify-between border-box w-[15%] h-screen border-r-[1px] border-zinc-600">
                {/* Menu nagivate */}
                <div className="logo w-[50px] text-white">
                    <img src={pic} alt="logo" aria-hidden></img>
                </div>
                <div className="menu flex gap-6 uppercase flex-col items-start text-zinc-700 text-2xl">
                    <a className="focused">Chat</a>
                    <a>Favourites</a>
                    <a>Recently</a>
                    <a>Call</a>
                </div>
                <div className="info flex gap-3 font-bold items-center text-xl text-white">
                    <div className=" rounded-full bg-gray-700 w-12 h-12"></div>
                    <p>Nhat Tung</p>
                </div>
            </div>
            <div className="chat-label w-full">
                <div className="h-[10%] border-b-[1px] w-full flex items-center justify-around border-gray-600 gap-[65%]">
                    {/* status */}
                    <div className="status gap-5 items-center flex float-l">
                        <div className=" rounded-full relative bg-gray-700 w-14 h-14">
                            <div className=" rounded-full absolute bottom-0 left-[66%] bg-[#5ad539] w-4 h-4"></div>
                        </div>
                        <div className="text-white text-left">
                            <a href="" className="text-xl font-bold">Đặng Văn Hỷ</a>
                            <p className="text-sm">Đang hoạt động</p>
                        </div>
                    </div>
                    {/* menu tab xem them */}
                    <div className="flex justify-start gap-5 w-[30px] float-right">
                        <img src={video} alt="video" aria-hidden></img>
                        <img src={menu} alt="menu" aria-hidden></img>
                    </div>
                </div>
                <div className="chat-info overflow-y-scroll w-full h-[75%] chat-flex row-gap: 10 flex-col pb-[25px] justify-end px-5 py-10 box-border m">
                    <div className="text-gray-500 my-5">The chat has begun</div>
                    {/* bubbles */}

                    {chatHistory.map(chat => {
                        if (chat.socket_id !== socketState.id) {
                            return (
                                <div className="bubble my-5">
                                    <div className="text-white pl-2">  {chat.username}</div>
                                    <div className="flex max-w-2xl gap-3 items-end">
                                        <div className=" rounded-full relative bg-gray-700 w-14 h-12" />
                                        <div className="w-fit rounded-xl h-fit text-left bg-gray-700 p-5 text-white">{chat.content}</div>
                                        <div className="text-sm text-gray-500">Đã nhận</div>
                                    </div>
                                </div>)
                        } else {
                            return <div className="bubble2 my-5 flex gap-[10px] ml-auto max-w-2xl items-end justify-end">
                                <div className="w-fit rounded-xl h-fit text-left bg-[#0084ff] p-5 text-white">{chat.content}</div>
                                <div className=" rounded-full relative bg-gray-700 w-14 h-12" />
                            </div>
                        }
                    })}

                    {/* input */}
                </div>
                <div className="h-[15%] border-t-[1px] w-full flex pl-5 items-center border-gray-600">
                    <input value={chatText} onChange={(e) => { setChatText(e.target.value) }} type="text" className="h-full text-white bg-transparent w-full focus:outline-0" placeholder="Nhập tin nhắn..."></input>
                    <button onClick={onSendMessage} className="text-white w-[15%] h-full text-2xl font-bold">Gửi</button>
                </div>
            </div>
        </div>
    );
}

export default LiveChat;
