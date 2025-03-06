import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//const About=()=>{
//    return(
//        <div className="aboutContainer">
//            <div>This is my about</div>
//            <User name={"Deivaaaa"} />
//            <UserClass name={"Deivazzz"} degree={"B.E"} />
//        </div>
//    )
//};

class About extends React.Component {
  constructor(props){
    super(props)
    console.log("parent Construnctor")
  }
  componentDidMount(){
    console.log("Parent component mounted");
  }
  render() {
    console.log("parent render")
    return (
      <div className="aboutContainer">
        
        <div>This about is Class component</div>
        <User name={"Deivaaaa"} />
       <UserClass name={"Deivazzz"} degree={"B.E"} />
      </div>
    );
  }
}
export default About;
