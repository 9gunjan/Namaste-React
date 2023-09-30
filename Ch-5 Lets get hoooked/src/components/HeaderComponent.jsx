import logo from "../../foodie express logo.jpg"
//Named Export
const Title = () => {
    return (
      <a href="/">
      <img className="logo" src={logo} alt="logo"></img>
      </a>
    )
  }

  const HeaderComponent = () => {
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
  
      </div>
    )
  
  }
  //Export Default
  export default HeaderComponent;