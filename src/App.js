import React, { lazy, Suspense, useEffect, useState } from "react";
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header.js";
// import { Component } from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import UseRefHook from "./components/useRefHook.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils.js/userContext.js";
// import Grocery from './components/Grocery.js';

// Chunking
// Code splitting
// Dynamic Bundling
// Lazy loading
// On demand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery.js"));
// this is import is basically a function

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Farhan khan",
    };
    setUserName(data.name);
  },[]);
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
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
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:redId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const firstProject = ReactDOM.createRoot(
  document.getElementById("firstProject")
);
// firstProject.render(<AppLayout />)
firstProject.render(<RouterProvider router={appRouter} />);

// export default AppLayout;
