import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

function Addform(){
    const [createform, setCreateForm] = useState({title: "", content: "", category_id: "", featured_image: null})
    const [createerror, setCreateError] = useState({})
    const token = localStorage.getItem('token')
    const validate = ()=> {
        const errorMessage = {}
        if(!createform.title){
            errorMessage.title = "Post must have a title"
        }
        if(!createform.content){
            errorMessage.content = "Post must have content"
        }
        if(!createform.category_id){
            errorMessage.category_id = "Choose number from 1-7"
        }
        if(!createform.featured_image){
            errorMessage.featured_image = "Add image url to your post"
        }
        return errorMessage
        
    }
    
    const createMutation = useMutation({
        mutationFn: (createform) => {
        const formData = new FormData();
        formData.append("title", createform.title);
        formData.append("content", createform.content);
        formData.append("category_id", String(createform.category_id));
        formData.append("featured_image", createform.featured_image);

        return fetch("https://test.blockfuselabs.com/api/posts", {
            method: "POST",
            headers: {
            Authorization: "Bearer " + token
            },
            body: formData
        }).then((res) => res.json());
        },
            onSuccess: () => {
            alert("Post created Successfully")
            setCreateForm({ title: "", content: "", category_id: "", featured_image: null })
        }
    })
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "featured_image") {
            setCreateForm({ ...createform, featured_image: files[0] });
        } else {
            setCreateForm({ ...createform, [name]: value });
        }
        setCreateError({ ...createerror, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate()
        if(Object.keys(errors).length > 0){
            setCreateError({...errors, general: "Please fill each field correctly"})
        } else { 
            createMutation.mutate(createform)
        }
    }
    return(
        <form onSubmit={handleSubmit} className="bg-[#f7fbef] shadow-lg rounded-lg p-6 space-y-6">
            <div>
                <label htmlFor="title" className="block text-lg font-semibold text-gray-700"
                    >Post Title
                </label> {createerror.title && <span className="text-base text-[#f00a31]">{createerror.title}</span>}
                <input value={createform.title} onChange={handleChange} type="text" name="title" placeholder="Enter post title" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"/>
            </div>
            <div>
                <label htmlFor="content" className="block text-lg font-semibold text-gray-700">
                    Content
                </label>{createerror.content && <span className="text-base text-[#f00a31]">{createerror.content}</span>}
                <textarea value={createform.content} onChange={handleChange} name="content" rows="7" placeholder="Write your post content here..." className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"></textarea>
            </div>
            <div>
                <label htmlFor="category" className="block text-lg font-semibold text-gray-700">
                    Category ID
                </label> {createerror.category_id && <span className="text-base text-[#f00a31]">{createerror.category_id}</span>}
                <input value={createform.category_id} onChange={handleChange} type="number" name="category_id" placeholder="Enter category ID (e.g. 1, 2, 3)" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"/>
            </div>
            <div>
                <label htmlFor="image" className="block text-lg font-semibold text-gray-700">
                    Image URL
                </label> {createerror.featured_image && <span className="text-base text-[#f00a31]">{createerror.featured_image}</span>}
                <input onChange={handleChange} type="file" name="featured_image" placeholder="Paste image url here" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"/>
            </div>
            <div className="flex gap-2 justify-center pt-4">
                <button type="submit"
                className="bg-red-500 hover:bg-red-600 text-lime-50 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
                Submit Post
                </button>
            </div>
        </form>
    )
}
export default Addform