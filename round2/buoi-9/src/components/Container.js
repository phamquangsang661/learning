import Menu from './Menu'
import Profile from './Profile'
import ContentBoard from './ContentBoard'
import { useState } from 'react'
function Container() {
    const [menuItemSelected, setMenuItemSelected] = useState("ABOUT")

    const onClickMenuItem = (item) => () => {
        setMenuItemSelected(item)
    }

    return <div className="flex flex-row w-[80%]  h-[80%] gap-3">
        <Menu menuItemSelected={menuItemSelected} onClickMenuItem={onClickMenuItem} />
        <div className="w-full h-full flex flex-row">
            <Profile />
            <ContentBoard menuItemSelected={menuItemSelected} />
        </div>

    </div>
}
export default Container