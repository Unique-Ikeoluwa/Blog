import Navbar from "../components/organisms/Navbar"
import News from "../components/organisms/News"
import Footer from "../components/organisms/Footer"
function Home() {
    return(
        <div className="bg-[#f7fbef]">
            <Navbar />
            <News />
            <Footer />
        </div>
    )
}
export default Home