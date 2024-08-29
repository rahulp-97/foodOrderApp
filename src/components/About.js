import React from "react";
import UserClass from "./UserClass";
import {UserContext} from "../utils/UserContext";

class About extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <div>
          loggedin user : <UserContext.Consumer>{(data) => <span className="text-xl font-bold">{data.loggedInUser}</span>}</UserContext.Consumer>
        </div>
        <h1>About</h1>
        <UserClass />
      </div>
    )
  }
}

export default About;