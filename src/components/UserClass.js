import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name :"dummy name",
            location : "dummy location",
            avatar_url : "",
        };
        console.log("Child constructor")
    }
    async componentDidMount(){
      console.log("Child component mounted");
      const data= await fetch("https://api.github.com/users/akshaymarch7")
      const response= await data.json();
      console.log(response);
      this.setState({
        name : response.name,
        location : response.location,
        avatar_url : response.avatar_url,
      })
      this.timer=setInterval(()=>{
        console.log("setInterval Done");
      },1000)
    }
    componentDidUpdate(){
      console.log("Component did update happened")
    }
    componentWillUnmount(){
      clearInterval(this.timer);
      console.log("Component unmount happened");
    }
  render() {
    //const{name,degree}=this.props //destructuring the props
    const {name,location,avatar_url}=this.state; // destructuring the state variable
    console.log("Child render");
    return (
      <div className="userClassContainer">
        <div>{name}</div>
        <UserContext.Consumer>
        {(data)=>console.log(data)}
        </UserContext.Consumer>
        <img src = {avatar_url} />
        <div>{location}</div>
        <div>Developer</div>
      </div>
    );
  }
}
export default UserClass;
