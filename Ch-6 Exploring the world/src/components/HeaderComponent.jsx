import { useState } from "react";
import logo from "../../foodie express logo.jpg"
//Named Export

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
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Cart</li>
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