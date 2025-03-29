import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils.js/constants"; //because named export
import { Link } from "react-router-dom";
// import { ReactDOM } from "react-dom/client";
import useOnlineStatus from "../utils.js/customHooks/useOnlineStatus";
import UserContext from "../utils.js/userContext";
import { useDispatch, useSelector } from "react-redux";
import newLogo from "../../public/icons/cravexpress-3.webp";

export const Header = ({ activeHeader }) => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Selector hook
  // subscribing to the store using Selector hook
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearItem = () => {
    dispatch(clearItems());
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className={`fixed w-full flex items-center justify-between h-[80px] px-[20px] text-[18px] 
      ${activeHeader ? "z-[10]" : "z-[5]"} 
      ${activeHeader && !isScrolled ? "text-white" : "text-black"} 
      ${isScrolled ? "bg-white shadow-custom" : "bg-transparent"}`}
  >
        
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
            <Link to={"/"}>Home</Link>
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
            <Link
              className="flex items-center gap-2 cart_item_wrapper"
              to={"/cart"}
            >
              <span class="cart_el cart_item">
                <svg
                  class="cart_svg cart_svg_color"
                  viewBox="-1 0 37 32"
                  height="20"
                  width="20"
                  fill="#686b78"
                >
                  <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                </svg>
                <span class="cart_item_count">{cartItems.length}</span>
              </span>
              <span>Cart</span>
            </Link>
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
