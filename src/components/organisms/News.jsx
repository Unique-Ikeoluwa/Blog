import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

function News(){
    const {data: posts, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
        fetch('https://test.blockfuselabs.com/api/posts').then(res => res.json())
    })

    return(
        <div  className="flex flex-col">        
            <div  className="relative h-5/6 pt-[90px] border rounded-md sm:pt-[50px] px-6 xl:px-[190px]">
                <div  className="flex flex-col pt-[100px] sm:pt-[150px] absolute">
                    <h2  className="text-4xl md:text-5xl font-extrabold">
                        Welcome to Blogify
                    </h2>
                    <p  className="text-xl font-bold text-slate-400">
                        Read latest news and monitor social happenings around you.
                    </p>
                </div>
            </div>
            <div>
                <div  className="px-6 sm:px-24 md:px-[200px] pt-[30px] sm:pt-[350px]">
                    <div  className="pb-8 flex flex-row justify-between">
                        <p  className="text-black text-4xl font-bold">
                            Latest News
                        </p>
                        <button  className="hidden sm:block border-black bg-lime-50 hover:bg-lime-100 py-2 px-3 rounded-lg"><Link to="">Read more</Link></button>
                    </div>
                    {isLoading ? (<p className="text.center mt-10 text-2xl font-semibold">News is loading</p>):(
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
  {posts.map((post) => (
    <div key={post.id} className="flex flex-col gap-4 mb-5 h-auto">
      <Link to={`details/${post.id}`}>
        <img
          src={post.featured_image_url_full}
          className="w-full h-60 object-cover rounded-lg"
          alt={post.title}
        />
        <div className="flex flex-col gap-3 mt-2">
          <p className="hover:underline font-semibold">{post.title}</p>
          <p className="text-sm text-gray-600">
            By {post.user.name} • {new Date(post.created_at).toLocaleDateString()}
          </p>
        </div>
      </Link>
    </div>
  ))}
</section>

                    )}
                    
                </div>
            </div>
        </div>
    )
}
export default News