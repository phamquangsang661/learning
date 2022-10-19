
import { MenuItem } from './../../lib/constants/constant'
import HeaderContent from './item/HeaderContent'

function BlogsContent() {
    return <div className="h-[95%] w-full bg-white shadow-sm">
        <HeaderContent content={MenuItem.BLOGS.header} />
    </div>
}
export default BlogsContent