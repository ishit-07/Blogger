import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // above instead of writting props we can destructure it
  // into like {blogs , tilte} or you can write (props) like this

  // we don't have to write this it will work
  // const blogs = props.blog;
  // const title = props.title;
  // console.log(props , blogs);

  return (
    <div className="blogs-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blogs-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>{blog.body.slice(0,50)}...</p>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
