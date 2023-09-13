import React from "react";
import ReactDOM from "react-dom/client";
import userlogo from "./user logo.png";
import logo from "./logo.png"
import "./styles.css";

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const header = React.createElement("div",{className:"Title"},[
//     React.createElement("h1",{key:"h1"},"Heading 1"),
//     React.createElement("h2",{key:"h2"},"Heading 2"),
//     React.createElement("h3",{key:"h3"},"Heading 3")
// ])

// Q: Create the same element using JSX

// const header = (
//   <div className="Title" key="title">
//     <h1 key="h1">Heading 1</h1>
//     <h2 key="h2">Heading 2</h2>
//     <h3 key="h3">Heading 3</h3>
//   </div>
// );

//Q: Create a functional component of the same with JSX

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 key="h1">This is h1 tag</h1>
//       <h2 key="h2">This is h2 tag</h2>
//       <h3 key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

// Q: Pass attribute into the tag in JSX
// const Header = () => {
//     return (
//       <div className="Title" key="title">
//         <h1 style={{color:"blue"}} key="h1">Heading 1</h1>
//         <h2 style={{color:"yellowgreen"}} key="h2">Heading 2</h2>
//         <h3 style={{backgroundColor:"green"}}key="h3">Heading 3</h3>
//       </div>
//     );
//   };

//Q. Composition of Component (Add a component inside another)

// const Random = () => {
//   return <h1>This is another random component</h1>
// }
// const Header = () => {
//       return (
//         <div className="Title" key="title">
//           <h1 style={{color:"blue"}} key="h1">Heading 1</h1>
//           <h2 style={{color:"yellowgreen"}} key="h2">Heading 2</h2>
//           <Random />
//           <h3 style={{backgroundColor:"green"}}key="h3">Heading 3</h3>
//         </div>
//       );
//     };

//Q. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX. 

// const element = <h1>This is react element</h1>

// const TitleElement = () => {
//   return <h1>This is title element</h1>
// } //This is TitleComponent

// const Header = () => {
//         return (
//           <div className="Title" key="title">
//           {element} {/* this is {TitleComponent} */}
//             <h1 style={{color:"blue"}} key="h1">Heading 1</h1>
//             <TitleElement /> {/* this is {<TitleComponent/>} */}
//             <h2 style={{color:"yellowgreen"}} key="h2">Heading 2</h2>
//             {/* This is {<TitleComponent></TitleComponent>}*/}
//           <TitleElement></TitleElement>
//             <h3 style={{backgroundColor:"green"}}key="h3">Heading 3</h3>
//           </div>
//         );
//       };

 /*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
  return (
    <>
      <header className="header">
      <div className="left">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="center">
      <input className="input"
      type="text"
      placeholder="Search here">
      </input>
      <button type="submit">Search</button>
      </div>
      <div className="right">
        <img src={userlogo} alt="user icon"></img>
      </div>
      </header>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);