import Input from "../atoms/Input"
import MobileNav from "../molecules/MobileNav"
import Logo from "../atoms/Logo"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <nav className="flex flex-row fixed top-0 left-0 justify-between md:px-7 lg:px-[180px] sm:px-6 py-5 bg-red-500 shadow-lg w-full z-10">
            <div className="flex flex-row items-center text-2xl ml-5 md:ml-0 font-extrabold relative z-[100]">
                <Logo />
            </div>
            <div className="text-lg items-center font-semibold text-lime-50 hidden md:ml-6 md:flex md:space-x-8">
                <div className="flex flex-row gap-8 pr-[100px]">
                    <Link  to="/" className="text-black hover:text-lime-200 active:text-lime-100 focus:underline focus:text-lime-300">
                        News
                    </Link>
                    <div className="relative group">
                        <span className="cursor-pointer">Categories</span>
                        <ul className="absolute hidden group-hover:block top-full left-0 bg-red-500 text-black p-3 rounded shadow-md z-50 min-w-[150px]">
                        </ul>
                    </div>
                      
                    <Link  to="/createpost" className="hover:text-lime-200 hover:ease-in-out active:text-lime-100 focus:underline focus:text-lime-300">
                        Add post
                    </Link>
                    <Link  to="/login" className="hover:text-lime-200 hover:ease-in-out active:text-lime-100 focus:underline focus:text-lime-300">
                        Sign in
                    </Link>
                    <a  href="#" className="hover:text-lime-200 hover:ease-in-out active:text-lime-100 focus:underline focus:text-lime-300">
                        About
                    </a>
                </div>
                <Input />
            </div>
            <MobileNav />
        </nav>
    )
}
export default Navbar