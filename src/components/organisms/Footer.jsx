import Language from "../atoms/Language"
import Socials from "../molecules/Socials"
import Logo from "../atoms/Logo"
import { Link } from "react-router-dom"
function Footer() {
    return(<>
        <footer className="bg-lime-50 pt-14 px-10">
            <div>
                <div className="flex flex-row justify-between gap-x-2 gap-y-9">
                    <div className="h-10">
                        <Logo />
                        <p class="text-lg font-bold text-slate-400">
                            Read latest news and monitor social happenings around you.
                        </p>
                    </div>
                    <div className="flex flex-row gap-6">
                        <div className="min-w-40">
                            <h3 className="mb-6 font-semibold text-base opacity-40">News</h3>
                            <ul className="list-none flex flex-col gap-4 text-base">
                                <li>Category</li>
                                <li>Latest News</li>
                            </ul>
                        </div>
                        <div className="min-w-40">
                            <h3 className="mb-6 font-semibold text-base opacity-40">Contact</h3>
                            <ul className="list-none flex flex-col gap-4 text-base">
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Advertise with us</li>
                                <li><Link to="/login"></Link>Login</li>
                                <li><Link to="/register"></Link>Sign up</li>
                            </ul> 
                        </div>
                        <div className="min-w-40">
                            <h3 className="mb-6 font-semibold text-base opacity-40">Policy</h3>
                            <ul className="list-none flex flex-col gap-4 text-base">
                                <li>Terms of use</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-7 mt-12 gap-x-2 md:flex-row justify-between">
                    <Language />
                    <Socials />
                </div>
            </div>
        </footer>
        <div className="py-6 mt-11 bg-black w-full border-t-lime-50 border-t border-t-bor">
                    <p className="text-center text-sm opacity-60 text-lime-50">© 2025 Blogify. All Rights Reserved.</p>
                </div>
                </>
    )
}
export default Footer