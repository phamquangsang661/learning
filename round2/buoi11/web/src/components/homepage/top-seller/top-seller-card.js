export const TopSellerCard = ({
    name, avatarUrl, total
}) => {
    return <div className="flex flex-col w-fit justify-center  items-center">
        <div className="w-[100px] overflow-hidden rounded-lg">
            <img width={100} src={avatarUrl} />
        </div>
        <p className="text-[25px] font-bold text-white">{name}</p>
        <p className="text-[15px] text-gray-400 font-bold">{total} ETH</p>
    </div>
}