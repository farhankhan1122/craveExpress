import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from "./components/Header.js"
// import { Component } from 'react';
import Body from "./components/Body"
import Footer from "./components/Footer";
import UseRefHook from './components/useRefHook.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            {/** if path = "/" */}
            {/* <Body /> */}
            {/** if path = "/about" */}
            {/* <About /> */}
            {/**if path = "/contact" */}
            {/* <Contact /> */}
            {Footer()}
            <UseRefHook />

        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ],
        errorElement: <Error />
    }
    
])



const firstProject = ReactDOM.createRoot(document.getElementById("firstProject"))
// firstProject.render(<AppLayout />)
firstProject.render(<RouterProvider router={appRouter} />)

// export default AppLayout;
