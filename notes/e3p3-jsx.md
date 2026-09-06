# e3p3-jsx
- JSX - js syntax easier to create react elements
- Jsx is not part of react (fudamental diff) react also write without jsx
- jsx is quite helpful

- Core of react
- const heading = React.createElement(  
  'h1',                                             
  {id: "heading",xyz: "abc"},
  "Hello world")

<h1>Hello world</h1> react element
- jsx is diff from html , jsx is html like syntax, jsx is not html written in js,xml like syntax
- JSX
- ****JSX => React.createElement => ReactElement- JS Object =>  HTMLElement(render)
// BABEL converts JSX => React.createElement
const jsxHeading = <h1>Hello world</h1>
- js engine of browser does not understand above piece of code , js engine understand ecma scripts then how this code working PARCEL(babel) is doing the job behind the scene , the above code is transpiled before goes to js engine
- parcel has given this transpilation job to BABEL
- BABEL - is a js compiler or package  , parcel install babel(node_modules)
- it takes yout jsx and converts into the code that js engine understands

- JSX (transpiled before it reaches JS engine) - PARCEL - Babel
- attributes are in camel casing
- hw - try to use diff att inside jsx
- if you write jsx is in single line - perfectly valid jsx but if you write in
multiple lines it needs to wrap around parenthesis because babel needs to understand where it starts and ends

# Babel
- babel also transipled code es-6 code that older browser understand
- read babel


# react components
- class based components- OLD
- functions based components - NEW
- <Html /> or <Html></Html> 

# functional components
-just a normal js function which return some jsx element or a function that return a react element.
- const fn = () => {
  return true
}
- const fn = () => true

- your can write
- react element inside react element
- react component inside react component
- react element inside react component
- react component inside react element 
- if a jsx variable used inside {} ,jsx sanatized the malicious data coming from any bad api and then pass into it within the {}, prevents CROSS SITES ATTACK

# Props
- want to pass dyanamic data into our component ,pass it as a props
- props are normal arguments of our functions
- passing props to our components is like passing arguments to our functions 
- console props - object
- props wraps the properties in object and pass to the functional component as props 

# zomato api
- install chrome (json Viewer) plugins to change json format
- **** CONFIG DRIVEN UI
- controlling your UI using data or congig
- How your UI looks like using some data or config and the config comes backend
- need to understand data and apis 
- ui layer eng and data layer eng.
- cloudinary image id for image - cdn - swiggy uses res.cloudinary.com cdn 

- whenever you are using map give key={} i,e unique id for every child
- very imp concept of keys
- rendering ,re-rendering , render cycle

# key
- without key 
- if you are not giving key onto the map child-(res-card) and a new child-(res-card) came in, then react re-renders all the child-(res-cards) or in other words react clean the res-container and re-render all the res-cards again because react dont know which res-card is new and where to put the new res-card , react can not uniquely identified these res-cards.
Treat all res-cards same

- with key
- if you key each of them a unique Id then 
it will render just one or new res-card because react know which one is new using Id


- **react says never use index as the keys - index is not recommended
- index as the key is an anti pattern
- read official documentation
- not using keys (not acceptable) >>>>> Index as Key >>>>> unique Id (best practice)
