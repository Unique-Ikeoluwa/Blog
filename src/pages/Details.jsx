
import Newsdetails from "../components/organisms/Newsdetails"
import Footer from "../components/organisms/Footer"
import Navbar from "../components/organisms/Navbar"
function Details(){
    return(
        <div className="bg-[#f7fbef]">
            <Navbar />
            <Newsdetails />
            <Footer />
        </div>
    )
}
export default Details