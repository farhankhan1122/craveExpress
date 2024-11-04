import React from "react";
import { LOGO_URL } from "../utils.js/constants";  //because named export
import { Link } from "react-router-dom";
// import { ReactDOM } from "react-dom/client";
export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img slt="food logo" src={ LOGO_URL } />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
// there are two ways to export above is the first one