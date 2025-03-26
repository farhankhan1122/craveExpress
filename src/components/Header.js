import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils.js/constants"; //because named export
import { Link } from "react-router-dom";
// import { ReactDOM } from "react-dom/client";
import useOnlineStatus from "../utils.js/customHooks/useOnlineStatus";
import UserContext from "../utils.js/userContext";
import { useDispatch, useSelector } from "react-redux";
import newLogo from "../../public/icons/cravexpress-3.webp"

export const Header = ({activeHeader}) => {
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
    <div className={activeHeader ? 'absolute z-[10] w-full flex items-center justify-between h-[80px] px-[20px] text-[18px] text-white' : 'absolute z-[5] w-full flex items-center justify-between h-[80px] px-[20px] text-[18px] text-black bg-white shadow-custom'}>
      <div className="w-[120px] h-auto relative">
        {/* <img className="rounded-full" slt="food logo" src="/public/icons/BiteLogo.svg" /> */}
        <Link to="/">
          <img className="" slt="food logo" src={newLogo} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex items-center gap-[40px] pr-[30px] ">
          {/* <li>online status: {onlineStatus ? "✅" : "🔴"}</li> */}
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
            <Link to={"/cart"}>Cart- ({cartItems.length})</Link>
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
