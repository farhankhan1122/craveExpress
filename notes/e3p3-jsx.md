# e3p3-jsx
- JSX - js syntax esier to create react elements
- Jsx is not part of react (fudamental diff) react also write without jsx
- jsx is quite helpful

- Core of react
- const heading = React.createElement(   //creating a javasript Object or react element
  'h1',                                             //fist argument - what element you want to create
  {id: "heading",xyz: "abc"},  //attributes props   //second argument - give attributes
  "Hello world")

- <h1>Hello world</h1> react element
- jsx is diff from html , jsx is html like syntax, jsx is not html written in js,xml like syntax
- JSX
- ****JSX => React.createElement => ReactElement- JS Object =>       HTMLElement(render)
// BABEL converts JSX => React.createElement
- const jsxHeading = <h1>Hello world</h1>
- js engine of browser does not understand above piece of code , js engine understand ecma scripts then how this code working PARCEL(babel) is doing the job behind the scene , the above code is transpiled before goes to js engine
- parcel has given this transpilation job to BABEL
- BABEL - is a js compiler or package  , parcel install babel(node_modules)
- it taked yout jsx and converts into the code that js engine understands

- JSX (transpiled before it reaches JS engine) - PARCEL - Babel
- attributes are in camel casing
- hw - try to use diff att inside jsx
- if write jsx is in single line - perfectly valid jsx but if write in
multiple lines it needs to wrap around parenthesis because babel needs to understand where it starts and ends

# Babel
- babel also transipled code es-6 code that older browser understand
- read babel
