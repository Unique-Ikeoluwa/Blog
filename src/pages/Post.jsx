import Navbar from "../components/organisms/Navbar"
import Addpost from "../components/organisms/Addpost"
import Footer from "../components/organisms/Footer"
function Post() {
    return(
        <div className="bg-[#f7fbef]">
            <Navbar />
            <Addpost />
            <Footer />
        </div>
    )
}
export default Post