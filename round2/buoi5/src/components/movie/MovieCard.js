export default function MovieCard(props) {
    const { imgSrc } = props
    return <div className="w-[310px] h-[465px] rounded-[15px] 
    transition-all hover:scale-110
    hover:w-[330px]
    ">
        <img src={imgSrc} className="w-[310px] h-[465px] object-cover  rounded-[15px]" alt='' />
    </div>
}