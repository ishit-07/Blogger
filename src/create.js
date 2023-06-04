import { useState } from "react";

// there is an useHistory hook in react router dom
// it will redirect to a new route
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author,setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);


  // first we have to call useHistory
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // for adding inside the data.json we have to store the value inside an object
    const blog = { title, body , author };

    setIsPending(true);

    // for adding into json server we have to use a fetch request
    fetch('http://localhost:8000/blogs' , {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New blog added.");
      setTimeout(() => {
        setIsPending(false);
      },300)


      // this is how we can route to the next page in javascript
      // window.location.replace('/');

      // if you have to go some pages back or front but this not very usable
      // this is for back
      // history.go(-1);
      // this is for front
      // this is will go two pages front
      // history.go(2);

      // we have to use this to route at any page
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {/* this is a submit event */}
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input 
        value={ title } 
        onChange={(e) => setTitle(e.target.value)}
        type="text" 
        required 
        />
        <label>Blog Body: </label>
        <textarea
        value={ body }
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author: </label>
        <select
        value={ author }
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option>Ishit</option>
          <option>Bhanu</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        { isPending && <button>Adding Blog...</button>} 
      </form>

      {/* <p>{ title }</p>
      <p>{ body }</p>
      <p>{ author }</p> */}
    </div>
  );
};

export default Create;
