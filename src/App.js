import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from "./components/Header.js"
// import { Component } from 'react';
import Body from "./components/Body"
import Footer from "./components/Footer";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body></Body>
            {Footer()}
        </div>
    )
}



const firstProject = ReactDOM.createRoot(document.getElementById("firstProject"))
firstProject.render(<AppLayout />)

// export default AppLayout;
