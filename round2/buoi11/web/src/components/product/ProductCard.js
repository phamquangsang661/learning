const ProductCard = ({ data }) => {
    const { like, name, coin, owner, price, imageUrl } = data
    return <div className="bg-[#343444] rounded-md p-5
     flex flex-col w-fit hover:translate-y-2 gap-2 transition-all">
        <div className="relative rounded-md overflow-hidden w-[300px] h-[300px]">
            <div className="absolute top-2 right-2 
            rounded-md bg-black text-white text-[10px] p-3 py-1">
                {like}
            </div>
            <img alt="" url={imageUrl} className="object-cover w-[300px] h-[300px] hover:scale-[1.2]" />
        </div>
        <div className="flex flex-row justify-between">
            <p className="text-white">{name}</p>
            <div className="bg-[#5142FC] p-1 
            px-2 text-white">{coin.name}</div>
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-row">
                <div className="w-6 h-6 rounded-md overflow-hidden flex justify-center items-center">
                    <img alt="" width={24} url={owner.imageUrl} />
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-[#616174] text-[10px] ">Owned By</p>
                    <p className="text-white text-[12px]">{owner.username}</p>
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
            rounded-lg
             bg-[#343444] text-white
              hover:text-black hover:bg-white">Place bid</button>
            <div className="text-[#616174] hover-[#5142FC] ">
                View history
            </div>
        </div>
    </div>
}
export default ProductCard