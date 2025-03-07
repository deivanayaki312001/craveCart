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
      <div className="m-5">
         <h1 class="text-3xl font-bold mb-4">About Us</h1>
    <p>Welcome to <strong>Crave cart</strong>, your ultimate destination for fast and delicious food delivery!</p>

    <h2 class="text-xl font-semibold mt-4">Why Choose Us?</h2>
    <ul class="list-disc ml-6">
        <li>🍽 Wide variety of restaurants – from street food to fine dining.</li>
        <li>🚀 Fast delivery – your food arrives hot and fresh.</li>
        <li>💳 Secure payments – multiple options available.</li>
        <li>📍 Real-time order tracking.</li>
        <li>🎁 Exciting offers and discounts.</li>
    </ul>

    <h2 class="text-xl font-semibold mt-4">Our Mission</h2>
    <p>We aim to provide a seamless and reliable food delivery experience while supporting local businesses.</p>

    <h2 class="text-xl font-semibold mt-4">Join Us!</h2>
    <p>Order now and enjoy your favorite meals with <strong>Crave cart</strong>! 🍕🍔🥗</p>
      {/* <div>This about is Class component</div>
       <User name={"Deivaaaa"} />
       UserClass name={"Deivazzz"} degree={"B.E"} />*/}
      </div>
    );
  }
}
export default About;
