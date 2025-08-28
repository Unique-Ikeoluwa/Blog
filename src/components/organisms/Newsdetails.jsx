import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";

function Newsdetails(){
    const { id } = useParams()
    const {data: post, isLoading: postLoading} = useQuery({
        queryKey: ['post', id],
        queryFn: () =>
        fetch(`https://test.blockfuselabs.com/api/posts/${id}`).then(res => res.json())
    })
    const {data: comments = [], isLoading: commentsLoading} = useQuery({
        queryKey: ['comments', id],
        queryFn: () =>
        fetch(`https://test.blockfuselabs.com/api/posts/${id}/comments`).then(res => res.json()),
        enabled: !!post
    })
    if(postLoading){
        return (
            <p className="text-center mt-10 text-2xl font-semibold">
                Loading post...
            </p>
        )
    }
    return(
        <div key={post.id} className="px-6 sm:px-24 md:px-[200px] flex flex-col pt-[130px] sm:pt-[150px] pb-20">
            <div className="flex flex-col gap-4">
                <img src={post.featured_image_url_full} alt="" />
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <div className="flex flex-col gap-3">
                    <p className="hover:underline">Blogify</p>
                    <p className="text-sm text-gray-600">
                        By {post.user.name} • {new Date(post.created_at).toLocaleDateString()}
                    </p>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-xl font-semibold mb-4">Post Comments</h3>
                {commentsLoading ? (
                <p className="text-center mt-4">Comments are loading...</p>
                ) : comments.length === 0 ? (
                <p>No comments yet.</p>
                ) : (
                    <div className="flex flex-col gap-4">
                        {comments.map((comment) => (
                            <div key={comment.id}>
                                <p>{comment.content}</p>
                                <p className="text-sm text-gray-600">
                                    By {comment.user.name} • {new Date(comment.created_at).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Newsdetails