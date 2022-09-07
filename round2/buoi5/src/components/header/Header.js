import './header.css'
const Header = () => {
    return <div
        className="fixed w-full z-[99999] flex flex-row justify-between p-3 bg-[#111111]"
    >
        <div className="flex flex-row gap-3 items-center">
            <div className="text-[#E50914] text-[25px] px-4">NETFLIX</div>
            <div className="flex flex-row gap-3 text-white text-[15px]">
                <div>Home</div>
                <div>TV Shows</div>
                <div>Movies</div>
                <div>Recently Added</div>
                <div>My lists</div>
            </div>
        </div>
        <div className="flex flex-row text-white gap-3 items-center">
            <div>ICON</div>
            <div>KIDS</div>
            <div>DVD</div>
            <div className="h-[30px] w-[30px] rounded-[8px] bg-[#C9C74E]"></div>
        </div>
    </div>
}

export default Header