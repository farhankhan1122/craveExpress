import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils.js/constants"; //because named export
import { Link } from "react-router-dom";
// import { ReactDOM } from "react-dom/client";
import useOnlineStatus from "../utils.js/customHooks/useOnlineStatus";
import UserContext from "../utils.js/userContext";
import { useDispatch, useSelector } from "react-redux";
import newLogo from "../../public/icons/cravexpress-3.webp";
import menuIcon from "../../public/icons/burger-menu.svg";

export const Header = ({ activeHeader }) => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [showMenu, setShowMenu] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Selector hook
  // subscribing to the store using Selector hook
  const cartItems = useSelector((store) => store.cart.items);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClearItem = () => {
    dispatch(clearItems());
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className={`mobile_head fixed w-full flex items-center justify-between h-[80px] px-[20px] text-[18px] 
      ${activeHeader ? "z-[10]" : "z-[5]"} 
      ${activeHeader && !isScrolled ? "text-white" : "text-black"} 
      ${isScrolled ? "bg-white shadow-custom" : "bg-transparent"}`}
    >
      <div className="mobile_header_item w-[120px] h-auto relative">
        {/* <img className="rounded-full" slt="food logo" src="/public/icons/BiteLogo.svg" /> */}
        <Link to="/">
          <img className="" slt="food logo" src={newLogo} />
        </Link>
      </div>
      <div className="nav-items big_screen">
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
              <span className="cart_el cart_item">
                <svg
                  className="cart_svg cart_svg_color"
                  viewBox="-1 0 37 32"
                  height="20"
                  width="20"
                  fill="#686b78"
                >
                  <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                </svg>
                <span className="cart_item_count">{cartItems.length}</span>
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
      <button onClick={handleMenu} className="menu_icon small_screen mobile_header_item">
        {!showMenu ? (
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke={activeHeader && !isScrolled ? "#ffffff" : "#000000"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke={activeHeader && !isScrolled ? "#ffffff" : "#000000"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke={activeHeader && !isScrolled ? "#ffffff" : "#000000"}
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        ) : (
          <svg
            fill='#000'
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
          </svg>
        )}
      </button>
      {showMenu && (
        <div className={`menu_dropdown absolute bg-white text-black w-full top-[0px] left-0 z-9

          `}>
          <ul className="p-4 pt-[60px]">
            <li>
              <Link to={"/"} onClick={() => setShowMenu(false)}>Home</Link>
            </li>
            <li>
              <Link to={"/about"} onClick={() => setShowMenu(false)}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={() => setShowMenu(false)}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/grocery"} onClick={() => setShowMenu(false)}>Grocery store</Link>
            </li>
            <li className="relative">
              <Link
                className="flex items-center gap-2 cart_item_wrapper"
                to={"/cart"} onClick={() => setShowMenu(false)}
              >
                <span className="cart_el cart_item">
                  <svg
                    className="cart_svg cart_svg_color"
                    viewBox="-1 0 37 32"
                    height="20"
                    width="20"
                    fill="#686b78"
                  >
                    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                  </svg>
                  <span className="cart_item_count">{cartItems.length}</span>
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

// ${activeHeader && !isScrolled ? "text-white" : "text-black"} 
// ${isScrolled ? "bg-white shadow-custom" : "bg-transparent"}
// there are two ways to export above is the first one
