import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <img src={require("./images/6333685.jpg")} alt="404" />
            <Link to='/'><button>Go To Home Page...</button></Link>
        </div>
    );
}
 
export default NotFound;
