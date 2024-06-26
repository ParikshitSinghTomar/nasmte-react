import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React");
// console.log(heading);//will not print any html code, it will print react code.

// const parent = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h1", {}, "I'm an h2 tag")]),
//     React.createElement("div", { id: "child2" },
//         [React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h1", {}, "I'm an h2 tag")])])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)

const jsxheading = <h1 id="heading">Namste React using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
