import React from "react";
import ReactDOM from "react-dom/client";
//Default Import
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import "../styles.css";

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

const AppLayout = () => {
  return (
  <>
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
 