import './css/index.css'
import { useState } from 'react'
import {
    useNavigate
} from "react-router-dom";
function Login(props) {
    const navigate = useNavigate();
    const { unState } = props
    const [roomId, setRoomId] = useState("")
    const onClickJoin = () => {
        navigate("/room/" + roomId)
    }
    return (
        <div className=" bg-[#030511] w-screen h-screen flex items-center justify-center">
            <div className="login-label flex flex-col gap-4 p-6 rounded-xl bg-[#040718] border-solid border-gray-500 border-[1px] w-fit h-fit text-white">
                <h1 className="text-4xl font-bold py-[20px]">Login to start your own <br></br> Real-time chat</h1>
                <input
                    type="text"
                    id="username"
                    className="rounded w-full h-[50px] bg-[#040718] border-zinc-800 px-4 border-[2px]"
                    placeholder="Username"
                    value={unState.username}
                    onChange={e => { unState.setUsername(e.target.value) }}
                />
                <input value={roomId} onChange={e => setRoomId(e.target.value)} type="text" id="room" className="rounded w-full h-[50px] bg-[#040718] border-zinc-800 px-4 border-[2px]" placeholder="Room"></input>
                <button onClick={onClickJoin} className="rounded h-[50px] bg-[#2979ff] w-full">Sign in</button>
            </div>
        </div>
    );

}

export default Login;