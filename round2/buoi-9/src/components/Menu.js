import { UserIcon, DocumentTextIcon, PencilIcon, ChatBubbleLeftIcon, AtSymbolIcon } from '@heroicons/react/24/solid'
function Menu(props) {
    const { onClickMenuItem, menuItemSelected } = props
    return <div className="flex flex-col font-pp bg-white shadow-md gap-3 text-[11px] rounded-md h-fit">

        <div
            onClick={onClickMenuItem("ABOUT")}
            className={`uppercase p-2 text-center text-[#323232] 
        border-b border-[rgba(0,0,0,0.1)] flex flex-col justify-center cursor-pointer
         hover:!text-[#78CC76] items-center gap-1
         ${menuItemSelected === 'ABOUT' ? "!text-[#78CC76]" : ""}
         `}>
            <UserIcon width={15} />
            About
        </div>

        <div
            onClick={onClickMenuItem("RESUME")}
            className={`uppercase p-2 text-center text-[#323232] 
            border-b border-[rgba(0,0,0,0.1)] flex flex-col justify-center cursor-pointer
             hover:!text-[#78CC76] items-center gap-1
             ${menuItemSelected === 'RESUME' ? "!text-[#78CC76]" : ""}
             `}>
            <DocumentTextIcon width={15} />
            Resume
        </div>

        <div
            onClick={onClickMenuItem("WORKS")}
            className={`uppercase p-2 text-center text-[#323232] 
        border-b border-[rgba(0,0,0,0.1)] flex flex-col justify-center cursor-pointer
         hover:!text-[#78CC76] items-center gap-1
         ${menuItemSelected === 'WORKS' ? "!text-[#78CC76]" : ""}
         `}>
            <PencilIcon width={15} />
            Works
        </div>

        <div onClick={onClickMenuItem("BLOGS")}
            className={`uppercase p-2 text-center text-[#323232] 
            border-b border-[rgba(0,0,0,0.1)] flex flex-col justify-center cursor-pointer
             hover:!text-[#78CC76] items-center gap-1
             ${menuItemSelected === 'BLOGS' ? "!text-[#78CC76]" : ""}
             `}>

            <ChatBubbleLeftIcon width={15} />
            Blogs
        </div>
        <div onClick={onClickMenuItem("CONTACT")}
            className={`uppercase p-2 text-center text-[#323232] 
            border-b border-[rgba(0,0,0,0.1)] flex flex-col justify-center cursor-pointer
             hover:!text-[#78CC76] items-center gap-1
             ${menuItemSelected === 'CONTACT' ? "!text-[#78CC76]" : ""}
             `}>

            <AtSymbolIcon width={15} />
            Contact
        </div>
    </div>
}
export default Menu