import LogForm from "../components/molecules/LogForm"
import Logo from "../components/atoms/Logo"
import { Link } from "react-router-dom"
function Login() {
    return(
        <div className="bg-[#f7fbef] h-screen">
            <div className="flex flex-row justify-between md:px-7 lg:px-[180px] sm:px-6 py-5 bg-red-500 shadow-lg w-full max-w-[7xl]">
                <Logo />
                <div className="flex flex-row sm:gap-8 text-lime-50">
                <div className="hidden pr-3 text-base gap-6 md:pr-32 font-bold md:flex flex-row md:gap-9 items-center">
                    <span className="text-xs md:text-base font-medium flex flex-row gap-5 items-center">Don't have an account? <Link to="/register" className="md:text-xl font-bold hover:text-2xl hover:ease-in-out hover:delay-300">Sign up</Link></span>
                    <a href="#" className="md:text-xl focus:underline hover:text-2xl hover:ease-in-out hover:delay-300">Help Center</a>
                </div>
                <div className="lg:hidden pr-3 text-base gap-1 font-bold flex flex-row items-center">
                    <Link to="/register" className="hover:text-2xl hover:ease-in-out hover:delay-300">Sign up</Link>
                    <a href="#" className="focus:underline hover:text-2xl hover:ease-in-out hover:delay-300">Help Center</a>
                </div>
                </div>
            </div>
            <LogForm />
        </div>
    )
}
export default Login