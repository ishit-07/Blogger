import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const {data: blogs, loading, errors} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">

      {errors && <div>{errors}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
