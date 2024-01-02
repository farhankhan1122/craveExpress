import React from "react";
import { LOGO_URL } from "../utils.js/constants";  //because named export
// import { ReactDOM } from "react-dom/client";
export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img slt="food logo" src={ LOGO_URL } />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
// there are two ways to export above is the first one