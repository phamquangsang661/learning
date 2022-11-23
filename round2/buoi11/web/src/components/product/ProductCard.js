const ProductCard = ({ data }) => {
    const { like, name, coin, owner, price, imageUrl } = data
    return <div className="bg-[#343444] rounded-md p-5
     flex flex-col w-fit hover:translate-y-[-8px] gap-2 transition-all">
        <div className="relative rounded-md overflow-hidden w-full h-[300px]">
            <div className="absolute top-2 right-2 
            rounded-md bg-black text-white text-[10px] p-3 py-1 z-[10]">
                {like}
            </div>
            <img alt="" src={imageUrl} className="w-[300px] h-[300px] object-cover transition-all hover:scale-[1.2]" />
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