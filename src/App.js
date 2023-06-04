import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  // let title = "How are You?";
  // let likes = 50;
  // we can't use boolean and objects for dyanmic values
  // let person = {name: "Bhanu" , age: 20};

  // let link = "http://www.google.com";
  // let target = "_blank";

  return (
    // when you have to use a router you have to wrap inside everything inside a router
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Than we have to switch inside a content so we use switch */}
          <Switch>
            {/* so inside switch we have to use route ,for which page we have to route */}
            {/* and inside route we have to give a path for home path="/" */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* this changable part of the route is called route parameters */}
            <Route exact path="/create">
              <Create />
            </Route>
            {/* this changable part of the route is called route parameters 
            This id called route parameters */}
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// This we are using inside return

// {/* this currly braces means dynamic value */}
// {/* <p>{ title }</p>
// <p>Liked { likes } times.</p>

// <p>{50}</p>
// <p>{"Hello World"}</p>
// <p>{[1,2,3,4,5]}</p>
// <p>{Math.random() * 10}</p>

// <a href={link} target={target}> Google Site</a> */}
