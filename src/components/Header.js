import { useState,useContext } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [dynamicBtn , setdynamicBtn] = useState("Login");
  const onlinestatus =useOnlineStatus();
  const [menuOpen, setMenuOpen] = useState(false);

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
      <button 
        className="lg:hidden p-2 border rounded-lg" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <div className={`lg:flex items-center ${menuOpen ? "block" : "hidden"} absolute lg:static top-16 right-4 bg-white shadow-lg lg:shadow-none p-4 rounded-lg lg:p-0 lg:bg-transparent`}>
        <ul className="flex flex-col lg:flex-row items-start lg:items-center">
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
          className="border border-black pl-4 rounded-lg"
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