
import { MenuItem } from './../../lib/constants/constant'
import HeaderContent from './item/HeaderContent'


function ResumeContent() {
    return <div className="h-[95%] w-full bg-white shadow-sm">
        <HeaderContent content={MenuItem.RESUME.header} />
    </div>
}
export default ResumeContent