
import AboutContent from './content/AboutContent'
import BlogsContent from './content/BlogsContent'
import ContactContent from './content/ContactContent'
import ResumeContent from './content/ResumeContent'
import WorksContent from './content/WorksContent'
function ContentBoard(props) {
    const { menuItemSelected } = props
    return <div className="w-full h-full flex items-center">
        {menuItemSelected === "ABOUT" &&
            <AboutContent />}
        {menuItemSelected === "RESUME" &&
            <ResumeContent />}
        {menuItemSelected === "WORKS" &&
            <WorksContent />}
        {menuItemSelected === "BLOGS" &&
            <BlogsContent />}
        {menuItemSelected === "CONTACT" &&
            <ContactContent />}
    </div>
}
export default ContentBoard