export default function MovieSection(props) {
    const { children, title } = props
    return <div className="flex flex-col gap-3 ">
        <div className="pl-9 text-white text-[20px]">{title}</div>
        <div className="flex flex-row w-full gap-2 ">{children}</div>
    </div>
}