import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const Heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement("div", {id : "container"}, [Heading, Heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container);
