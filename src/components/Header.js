import { useState,useContext } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [dynamicBtn , setdynamicBtn] = useState("Login");
  const onlinestatus =useOnlineStatus();
 

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)
  const { setusername, loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center
">
      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />
      <div className="Navbar">
        <ul className="flex items-center">
          <li className="m-1 hover:bg-[rgb(252,148,51)] px-3 py-2 rounded-lg"><Link to ="/">Home</Link></li>
          <li className="m-1 hover:bg-[rgb(252,148,51)] px-3 py-2 rounded-lg"><Link to="/about">About Us</Link></li>
          <li className="m-1 hover:bg-[rgb(252,148,51)] px-3 py-2 rounded-lg"> <Link to ="/contact"> Contact Us</Link></li>
          <li className="m-1 hover:bg-[rgb(252,148,51)] px-3 py-2 rounded-lg"><Link to ="/grocery"> Grocery</Link></li>
          <li className="m-1 hover:bg-[rgb(252,148,51)] px-3 py-2 rounded-lg">onlinestatus :{onlinestatus ? "🟢":"🔴" }</li>
          {/** */}
          <Link to ="/cart">  <img className="w-6 h-6" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-460-483484.png?f=webp&w=256"/></Link>
          <li className="m-1  hover:bg-[rgb(252,148,51)] px-3 py-2 rounded-lg"><Link to ="/cart"> Cart -({cartItems.length})</Link></li>
          <button className="m-1  hover:bg-[rgb(252,148,51)] px-3 py-2 rounded-lg" onClick={()=>(  //Example demonstration for useState need
            dynamicBtn==="Login"?
            setdynamicBtn("Logout"):setdynamicBtn("Login")
          )}>{dynamicBtn}</button>
           <input
          className="border border-black"
          value={loggedInUser}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        </ul>
      </div>
    </div>
  );
};
export default Header;