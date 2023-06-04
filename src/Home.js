import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // it can be an array, boolean , object, number
  // let [name , setName] = useState('Ishit');
  // let [num , setNum] = useState(20);

  // let [blogs, setBlogs] = useState([
  //   {
  //     title: "Fun with React",
  //     Author: "Ishit",
  //     content: "Lorem Ipsum....",
  //     id: 1,
  //   },
  //   {
  //     title: "Learning React",
  //     Author: "Bhanu",
  //     content: "Lorem Ipsum....",
  //     id: 2,
  //   },
  //   {
  //     title: "Become a Web Developer",
  //     Author: "Ishit",
  //     content: "Lorem Ipsum....",
  //     id: 3,
  //   },
  // ]);

  // we can use  this function as a props
  // const handleDelete = (id) => {
  //   const Delete = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(Delete);
  // };

  // const handleClick = () => {
  //     // console.log("Hello, Guys!" , e);
  //     // setName('Verma');
  //     // setNum(30);

  // }

  // const handleClickAgain = (name, e) => {
  //     console.log('Hello ' + name, e.target);
  // }

  // const [num, setNum] = useState(null);
  // and I have to click and give an alert but i can't do that in an onClick function so that's why we use useEffect
  // useEffect you tell React that your component needs to do something after render
  //  React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

  // now we use useEffect
  // useEffect(() => {
  //     console.log("Hi, my name is Ishit Verma.");
  // })

  // if we pass an empty array inside it than it will render only one time when you refreshed and afterwards it will nt be render
  // and the array is called dependencies

  // useEffect(() => {
  //     console.log("Hi, my name is Ishit Verma.");
  // },[])

  // we have to use useEffect specifically for one tag so we can use this
  //   useEffect(() => {
  //     console.log("Ishit Verma"); 
  //   }, [num]);

  // Using a json server and fetch the data from a json file



  // *****************************

  // we can fetch the data and use like this below
  // or we can create a custom hook for it
  
  // *****************************

  // const [title, setTitle] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [errors, setErrors] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((response) => {
  //         //   console.log(response);
  //         if (!response.ok) {
  //           throw Error("could not fetch the data...");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setTitle(data);
  //         setLoading(false);
  //         setErrors(null);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setErrors(err.message);
  //         setTitle(null);
  //       });
  //   }, 3000);
  // }, []);




  //   const handleDelete = (id) => {
  //     const Delete = title.filter((title) => title.id !== id);
  //     setTitle(Delete);
  //   };


  // this is how we can use custom hook and we can do functions with it, by sending an information 
  const {data: blogs, loading, errors} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {/* <h1>Homepage</h1>
            <p>{name} is {num} years old</p>
            <button onClick={handleClick}>Click Me</button>

            // you can't use function with parentheses inside an html
            // you have call to a function inide a function with parentheses written below
            <button onClick={(e) => handleClickAgain('Ishit',e)}>Click Me Again</button> */}
      {/* this is how we can crete props */}

      {/* in this we use && that's because firstly the value of title is null and this null passes through bloglist
      and inside bloglist we are mapping with the title value null */}
      {/* that's why we use && if the value of title is false than it didn't even bother to bloglist 
      in this both the value should be true */}
      {/* {title && <BlogList blogs={title} title="All Blogs" handleDelete={handleDelete} />} */}

      {/* This is conditional rendoring */}

      {/* <BlogList blogs={blogs.filter((blog) => (blog.Author === 'Ishit'))} title="Ishit's Blogs"/> */}

      {/* <button
        onClick={() => {
          setNum(num + 1);
        }}
        >
        Click Me {num}
      </button> */}


      {errors && <div>{errors}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}

      
    </div>
  );
};

export default Home;
