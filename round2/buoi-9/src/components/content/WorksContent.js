import { MenuItem } from './../../lib/constants/constant'
import HeaderContent from './item/HeaderContent'

function WorksContent() {
    return <div className="h-[95%] w-full bg-white shadow-sm">
        <HeaderContent content={MenuItem.WORKS.header} />
    </div>
}
export default WorksContent