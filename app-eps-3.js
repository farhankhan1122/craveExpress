// this empty object  {} is the place where you give attribute to your tag
 const heading = React.createElement(   //creating a javasript Object or react element
    'h1',                                             //fist argument - what element you want to create
    {id: "heading",xyz: "abc"},  //attributes props   //second argument - give attributes
    "Hello world")   //child props                    //third argument - children of the first argument

console.log(heading)  // Object
// this heading  is react element(object)
// react element is nothing but normal javascript object

// this object also having props
// PROPS are children and attributes that we passes
// like (hello world) is the children



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)


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


const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [
                React.createElement("h1",{},"I am h1 tag"),
                React.createElement("h2",{},"I am h2 tag")
            ]
            // use array to create siblings
        ),
        React.createElement(
            "div",
            {id: "child"},
            [
                React.createElement("h1",{},"I am h1 tag"),
                React.createElement("h2",{},"I am h2 tag")
            ]
            // use array to create siblings
        )
    ]
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(parent)


// using react.createElement code become so messy not readable
// JSX(javascript systax extension)