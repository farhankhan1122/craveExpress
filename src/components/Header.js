import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils.js/constants"; //because named export
import { Link } from "react-router-dom";
// import { ReactDOM } from "react-dom/client";
import useOnlineStatus from "../utils.js/customHooks/useOnlineStatus";
import UserContext from "../utils.js/userContext";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");


  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)

  // Selector hook 
  // subscribing to the store using Selector hook
  const cartItems = useSelector((store) => store.cart.items)

  const handleClearItem = () => {
    dispatch(clearItems())
  };
 console.log(cartItems,"cartItems")

  return (
    <div className="flex items-center justify-between h-[80px] bg-slate-400 px-[20px] text-[18px]">
      <div className="w-[50px] h-[50px]">
        <img className="rounded-full" slt="food logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex items-center gap-[40px] pr-[30px] ">
          {/* <li>online status: {onlineStatus ? "✅" : "🔴"}</li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery store</Link>
          </li>
          <li className="relative">
            <Link to={"/cart"} className="font-bold text-xl">Cart- ({cartItems.length})</Link>
          </li>
          <li>
            <button
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          {/* <li className="font-bold">
            {loggedInUser}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
// there are two ways to export above is the first one
