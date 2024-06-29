import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//Default Import
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import "../index.css";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utils/UserContext";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
{
  /**
   * Header
   *    -Logo(LogoImage component)
   *    -Nav Items (Right Side)
   *    -Cart
   * Body
   *    -Search Bar
   *    -RestrauntList
   *      -RestrauntCard(many cards)
   *        -Image
   *        -Name
   *        -Rating
   *        -Cuisines
   * Footer
   *    -Links
   *    -Copyright
   */
}



//importing Grocery through lazy loading
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName , setUserName] = useState("");

useEffect(() => {
  //make an api call and send username and password
  const data = {
    name : "Gunjan"
  };
  setUserName(data.name);
},[]);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName , setUserName}} >
  <div>
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
  </div>
  </UserContext.Provider>
  </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
     path : "/",
     element : <AppLayout />,
     errorElement : <Error />,
     children : [
      {
        path : "/",
        element : <BodyComponent />
      }
      ,{
        path : "/about",
        element : <About />,
        
      },
      {
        path: "/contact",
        element : <Contact />,
       
      },
      {
        path: "/grocery",
        element : <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
       
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
      },
      {
        path : "/cart",
        element : <Cart />
      }
     ],
     errorElement : <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
 