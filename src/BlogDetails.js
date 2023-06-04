import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
// it allow us to grab parameters or route parameters from the route
  const { id } = useParams();
  const {data: blogs, loading, errors} = useFetch('http://localhost:8000/blogs/' + id);
  const homePage = useHistory();

  const deleteBlog = () => {
    fetch('http://localhost:8000/blogs/' + blogs.id,{
      method: 'DELETE'
    }).then(() => { 
      homePage.push('/');
    })
  }
  return (
    <div className="blog-details">
      {/* now it will access the parameters from the route */}
      {/* <h2>Blog Details - { id }</h2> */}
      {loading && <div>Loading...</div>}
      {errors && <div>{errors}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <h5>{blogs.author}</h5> 
          <div>{blogs.body}</div>
          <button onClick={deleteBlog}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
