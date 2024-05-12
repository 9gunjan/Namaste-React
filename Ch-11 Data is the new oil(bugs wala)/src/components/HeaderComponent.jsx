import { useState } from "react";
import logo from "../assets/img/foodie express logo.jpg"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const loggedInUser = () => {
  return false;
}



  const HeaderComponent = () => {

    const[isLoggedIn , setIsLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();

    const Title = () => {
      return <div className="logo-container">
      <img className="w-56 " src={logo} alt="logo"></img>
      </div>
    }
    return (
      <div className="flex items-center justify-start bg-red-600 p-4 m-4 shadow">
       <Title />
        <div className="flex items-center">
          <ul className="flex p-15  ">
          <li className="px-60" ><b>Internet Status :</b>{onlineStatus ? " Online🟢 " : "Offline🔴"}</li>
          <li className="px-4"> 
            <Link to="/">Home</Link>
          </li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/cart">Cart</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
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