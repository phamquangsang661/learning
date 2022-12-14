import axios from "axios"
import { useProductLike } from "../../lib/hooks/use-product-like"
import { useAuth } from "../../lib/hooks/use-auth"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react"
import dayjs from 'dayjs'

const ProductCard = ({ data }) => {
    const { name, coin, owner, price, imageUrl, id, sellEndDate } = data
    const { isAuth } = useAuth()
    const { likeInfo, setRefresh } = useProductLike({ id })
    console.log(sellEndDate)
    const onClickLike = () => {
        const session = Cookies.get("session")

        if (!isAuth) {
            alert("you must to login to like product")
            return;
        }

        axios.post(`http://localhost:1337/api/products/${id}/like`, {
        }, {
            headers: {
                authorization: "Bearer " + session
            }
        }).then(res => {
            setRefresh(Math.random())
        }).catch(err => {
            alert("you must to login to like product")
        })
    }
    const [timeCount, setTimeCount] = useState(dayjs(sellEndDate).subtract(dayjs()).format("HH:mm:ss"))
    
    useEffect(() => {
        let timeOutCount = null;
        if (sellEndDate) {
            timeOutCount = setInterval(() => {
                console.log("RUN TIME OUT")
                setTimeCount(dayjs(sellEndDate).subtract(dayjs()).format("HH:mm:ss"))
            }, 1000)
        }
        return () => {
            if (timeOutCount)
                clearInterval(timeOutCount)
        }
    }, [sellEndDate])
    return <div className="bg-[#343444] rounded-md p-5
     flex flex-col w-fit hover:translate-y-[-8px] gap-2 transition-all">
        <div className="relative rounded-md overflow-hidden w-full h-[300px]">
            {likeInfo?.isLiked && <button onClick={onClickLike} className="absolute top-2 right-2 
            rounded-md  text-[10px] p-3 py-1 z-[10] bg-black text-white ">
                {likeInfo?.likes || 0}
            </button>}
            {!likeInfo?.isLiked && <button onClick={onClickLike} className="absolute top-2 right-2 font-bold
            rounded-md  bg-white border-black border-[2px] text-black  text-[10px] p-3 py-1 z-[10]">
                {likeInfo?.likes || 0}
            </button>}
            <img alt="" src={imageUrl} className="relative w-[300px] h-[300px] object-cover transition-all hover:scale-[1.2]" />


            <div className="absolute z-50 bottom-0 left-0 w-full h-fit py-2 flex justify-center items-center">
                <div className="bg-[#343444] text-white font-bold rounded-md px-4 py-1">{timeCount}</div>
            </div>
        </div>
        <div className="flex flex-row justify-between items-center">
            <p className="text-white text-[25px]">{name}</p>
            <div className="bg-[#5142FC]  py-[0px] rounded-[15px]
            px-2 text-white font-bold text-[10px] h-[20px]
             flex justify-center items-center">
                {coin.name}
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 justify-center items-center">
                <div className="w-10 h-10 rounded-md overflow-hidden flex justify-center items-center">
                    <img alt="" width={40} src={owner.imageUrl} />
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-[#616174] text-[12px] ">Owned By</p>
                    <p className="text-white text-[17px]">{owner.username}</p>
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <p className="text-[#616174] text-[10px] text-right">Current Bid</p>
                <p className="text-white text-[14px] text-right">{price} {coin.name}</p>
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <button className="border-[2px] 
            border-[#5142FC] p-3
            rounded-[25px]
             bg-[#343444] text-white
              hover:text-black hover:bg-white">Place bid</button>
            <div className="text-[#616174] hover-[#5142FC] ">
                View history
            </div>
        </div>
    </div>
}
export default ProductCard