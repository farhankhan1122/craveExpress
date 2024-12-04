import User from "../components/User";
import UserClass from "../components/UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1 style={{ marginBottom: "20px" }}>About class component</h1>
        {/* sending as an argument */}
        <User name={"Farhan kk (functional c)"} />
        {/* <UserClass name={"Farhan (class based)"} location={"delhi"} /> */}
        {/* <UserClass name={"Elon (class based)"} location={"US"} /> */}
        {/* all props are passed over here is combined in one object and can be access using this obj */}
      </div>
    );
  }
}

/**
 * 
 * {{{{ Below cycle is wrong }}}}
 * - Parent Constructor
 * - Parent Render
 *    
 *   - Farhan Constructor
 *   - Farhan Render
 * 
 *   - ELon Constructor
 *   - Elon Render 
 * 
 *   <DOM UPDATED - IN SINGLE BATCH>
 *   - Farhan ComponentDidMount
 *   - Elon ComponentDidMount
 * 
 * 
 * - Parent ComponentDidMount
 * 
 * 
 * 
 *  - react lifecycle methods diagram
 - refer to this (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
 * 
 */

export default About;
