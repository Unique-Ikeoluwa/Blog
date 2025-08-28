import { CiSearch } from "react-icons/ci";
function Input() {
    return(
        <div className="hidden md:flex items-center gap-6">
            <input type="search" placeholder="What are you looking for?" className="text-base h-10 px-5 bg-lime-50 rounded-[30px] w-[350px] outline-none placeholder-slate-400 hover:placeholder-slate-600 hover:ease-in-out" />
            <button className="relative right-16 text-2xl top-3 transform -translate-y-1/2 text-gray-400">
                <CiSearch />
            </button>
        </div>
    )
}
export default Input