import BlogCard from "./BlogCard";

export default function BlogList({ blogs }){
    return (
        <>
        <div className="row">
        {blogs.length == 0 ? (
            <h3>No Blog</h3>
        ) : (
            blogs.map((blog) => {
                return (
                    <div className="col-md-3" key={blog.id}>
                        <BlogCard  data={blog}/>
                    </div>
                );
            })
        )}
        </div>
        </>
    )
}