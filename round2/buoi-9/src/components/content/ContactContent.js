

import { MenuItem } from './../../lib/constants/constant'
import HeaderContent from './item/HeaderContent'

function ContactContent() {
    return <div className="h-[95%] w-full bg-white shadow-sm">
        <HeaderContent content={MenuItem.CONTACT.header} />
    </div>
}
export default ContactContent