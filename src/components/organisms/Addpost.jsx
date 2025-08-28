import Addform from "../molecules/Addform"
function Addpost(){
    return(
        <section className="px-6 sm:px-24 md:px-[200px] pt-[130px] sm:pt-[150px] pb-20">
            <h2 className="text-3xl font-extrabold text-center text-red-600 mb-8">
                Create a New Post
            </h2>
            <Addform />
            <div id="new-post-display" className="mt-10 bg-white p-6 rounded-lg shadow-md hidden">
                <h3 className="text-2xl font-bold text-red-600 mb-2" id="display-title"></h3>
                <p className="text-gray-700 mb-4" id="display-content"></p>
                <p className="text-sm text-lime-700 font-semibold" id="display-category"></p>
            </div> 
            <div className="mt-5">
                <label for="postId" className="block text-lg font-semibold text-gray-700">Post ID to Delete</label>
                <input
                type="number"
                id="postId"
                name="postId"
                placeholder="Enter post ID to delete"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>         
            <button
                type="submit"
                id="remove"
                className="bg-red-500 hover:bg-red-600 text-lime-50 font-bold py-3 px-6 mt-4 justify-center  rounded-lg shadow-md transition duration-300 ease-in-out"
            >
                delete Post
            </button>     
        </section>
    )
}
export default Addpost