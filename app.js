import React from "react"
import ReactDOM from "react-dom/client"

// ***React.createElement => ReactElement- JS Object => HTMLElement(render)

// this empty object  {} is the place where you give attribute to your tag
const heading = React.createElement(   //creating a javasript Object or react element
'h1',                                             //fist argument - what element you want to create
{id: "heading",xyz: "abc"},  //attributes props   //second argument - give attributes
"Hello world😎")   //child props                    //third argument - children of the first argument


// JSX (transpiled before it reaches JS engine) - PARCEL - Babel

// ****JSX => React.createElement => ReactElement- JS Object => HTMLElement(render)
// BABEL converts JSX => React.createElement
const jsxHeading = <img src="" />
// its hard to read not user friendly but this is core of react element
// then JSX created - js syntax esier to create react elements

console.log(heading)  // Object
console.log(jsxHeading);
// this heading  is react element(object)
// react element is nothing but normal javascript object

// this object also having props
// PROPS are children and attributes that we passes
// like (hello world) is the children



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)

// React.createElement => Object => HTMLElement(rendered)


// root.render to take this object [create that h1 or convert to h1] tag which the browser understand and put that inside root element




//How to create below nested elements

/**
* <div id="parent">
*   <div id="child">
*      <h1></h1>   
*   </div>
*   <div id="child2">
*      <h1></h1>   
*   </div>
* </div>
* 
* ReactElement(Object) = HTML(Browser Understands)
*/


// const parent = React.createElement(
// "div",
// {id: "parent"},
// [
//     React.createElement(
//         "div",
//         {id: "child"},
//         [
//             React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("h2",{},"I am h2 tag")
//         ]
//     ),
//     React.createElement(
//         "div",
//         {id: "child"},
//         [
//             React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("h2",{},"I am h2 tag")
//         ]
//         )
//     ]
//     );
//     const root2 = ReactDOM.createRoot(document.getElementById("root2"))
//     root2.render(parent)
    // use array to create siblings
