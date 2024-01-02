import React from "react"
import ReactDOM from "react-dom/client"

// ***React.createElement => ReactElement- JS Object => HTMLElement(render)

const heading = React.createElement(   //creating a javasript Object or react element
'h1',                                             
{id: "heading",xyz: "abc"},  //attributes props  
"Hello world😎")   //child props                    //third argument - children of the first argument


// JSX (transpiled before it reaches JS engine) - PARCEL - Babel

// ****JSX => React.createElement => ReactElement- JS Object => HTMLElement(render)
// BABEL converts JSX => React.createElement
const jsxHeading = <p>hello </p>
// its hard to read not user friendly but this is core of react element
// then JSX created - js syntax easier to create react elements

console.log(heading)  // Object
console.log(jsxHeading);
// this heading  is react element(object)
// react element is nothing but normal javascript object

// this object also having props
// PROPS are children and attributes that we passes
// like (hello world) is the children



// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)

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

    const fn = () => {
        return true
    }
    // or
    const fnS = () => true


    // React functional component
    const HeadingComponent = () => {
        return <h1>inner component</h1>
    }
    // component composition - composition one component into other
    const number = 1000
    // react element
    const element = (
        <h2>react element</h2>
    );
    const HeadingComponent2 = () =>
    (
        <div>
            {number}
            {element}
            <HeadingComponent />
            {/* babel is doing it , babel searches <Xyz /> knows functional component */}
            <h1>Component</h1>
        </div>
    )

    const newRoot = ReactDOM.createRoot(document.getElementById("root-new"))
    newRoot.render(<HeadingComponent2 />)

    // you can also use normal js function instead of arrow function

    // const NormalJsFn = function() {
    //     return (
    //         <h1>inner component</h1>
    //     )
    // }

    //  you can put any js code or expression inside {} which is inside JSX 
