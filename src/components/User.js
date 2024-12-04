// lets first make a functional component and then change it to class component
// normal js function

import { useState } from "react";

// FUNCTIONAL COMPONENT = its a function that returns some piece of JSX
const User = (props) => {
    const [count] = useState(0)
    // you can also destructre props
    // const User = ({ name })
    // getting name as an parameter
  return (
    <div className="user-card">
        <h1>count = {count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Luchnow</h3>
      <h4>Contact: #farhan</h4>
    </div>
  );
};

export default User;
