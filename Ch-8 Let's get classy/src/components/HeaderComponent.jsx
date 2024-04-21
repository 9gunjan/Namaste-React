import { useState } from "react";
import logo from "../assets/img/foodie express logo.jpg"
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return false;
}

const Title = () => {
    return (
      <a href="/">
      <img className="logo" src={logo} alt="logo"></img>
      </a>
    )
  }

  const HeaderComponent = () => {

    const[isLoggedIn , setIsLoggedIn] = useState(false);

    return (
      <div className="header">
       <Title />
        <div className="nav-items">
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        {/* ternary operator */}
        {
          isLoggedIn ? 
          (<button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Log Out</button>) 
          : 
          (<button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>)
        }
      
      
      </div>
    )
  
  }
  //Export Default
  export default HeaderComponent;