import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <h1>About</h1>
        <UserClass />
      </div>
    )
  }
}

export default About;