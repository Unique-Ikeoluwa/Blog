import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
function MobileNav(){
    return(
        <>
            <div className="flex items-center md:hidden">
                <button  className="inline-flex text-2xl items-center justify-center p-2 rounded-md text-lime-50 hover:text-lime-200 focus:text-lime-300 z-[100] relative">
                  <IoMdMenu />
                </button>
            </div>
            <div  className="fixed  left-0 w-full  shadow-md h-screen bg-red-500 z-50 pt-16  hidden  md:hidden">
                <div className="text-lime-50 pt-2 pb-3 space-y-1">
                        <h1 className=" text-3xl p-2">Explore Categories  </h1>
                    <Link  to="/" className="border-transparent leading-10   text-lime-50 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        News
                    </Link> <hr className="bg-gray-400 opacity-25 mt-5 mx-4" />
                    <div className="mt-4 text-lime-50 pl-3 pr-4 py-2 border-l-4 text-base font-medium" >
                        Categories
                        <ul className="hidden mt-2 text-lime-100 pl-5">
                          {/* <!-- For Categories --> */}
                        </ul>
                      </div><hr className="bg-gray-400 opacity-25 mt-5 mx-4"/>
                    <Link  to="/createpost" className="  text-lime-50 leading-10 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Add post
                    </Link><hr className="bg-gray-400 opacity-25 mt-5 mx-4"/>
                    <Link  to="/login"  className=" border-transparent   text-lime-50 leading-10 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Sign in
                    </Link><hr className="bg-gray-400 opacity-25 mt-5 mx-4"/>
                    <a href="#" className=" border-transparent   text-lime-50 leading-10 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        About
                    </a><hr className="bg-gray-400 mt-5 opacity-25 mx-4"/>
                </div>
            </div>
        </>
    )
}
export default MobileNav