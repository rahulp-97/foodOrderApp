import React from "react";

class UserClass extends React.Component {
    constructor(){
        super();
        this.state = {
          userInfo : {
            name: 'dummy name',
            location: 'dummy location'
          }
        }
      }
      async componentDidMount(){
        const getUser = await fetch('https://api.github.com/users/rahulp-97');
        const userData = await getUser.json();
        this.setState({userInfo : userData});
      }
      shouldComponentUpdate(nextProps, nextState){
        return this.state.userInfo?.name !== nextState.userInfo?.name;
      }
    render(){
        const {name, location} = this.state.userInfo;
        return (
            <div>
                <h3>name: {name}</h3>
                <h3>location: {location}</h3>
            </div>
        )
    }
};

export default UserClass;