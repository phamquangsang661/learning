
import { MenuItem } from './../../lib/constants/constant'
import HeaderContent from './item/HeaderContent'
function AboutContent() {

    return <div className="h-[95%] w-full bg-white shadow-sm">
        <HeaderContent content={MenuItem.ABOUT.header} />
        đây là nội dung của about content
        <HeaderContent content={MenuItem.ABOUT.header2} />
        Đây là nội dung của my service
        <HeaderContent content={MenuItem.ABOUT.header3} />
        <HeaderContent content={MenuItem.ABOUT.header4} />
    </div>
}
export default AboutContent