import { useState } from "react";

import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author,setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);



  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const blog = { title, body , author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs' , {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New blog added.");
      setTimeout(() => {
        setIsPending(false);
      },300)

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
    </div>
  );
};

export default Create;
