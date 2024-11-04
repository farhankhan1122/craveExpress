# mpre about useEffect hook (ep7part1)
- no dependency array passed - useEffect called everytime my component render
- if dependency array is empty - useEffect called on initial render or just once
- if da is [btnNameReact ] called evrytime btnNameReact is updated

# mpre about useState hook (ep7part2)
- always specify useState variabled at the top of function
- never create useState variabled inside if else or any other condition, created inconsistency


# React router dom
- npm i react-router-dom
- import { createBrowserRouter } from 'react-router-dom';
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    }
])
now need to provide it to render
import { RouterProvider } from 'react-router-dom';
actually provides this routing configuration to our app
firstProject.render(<RouterProvider router={appRouter} />)

- there have been other routers but reconmmended only createBrowser router
- Rafce is short cut to create a functional component
- react dom router page giving 404 page , need to add custom 404 page
- react router dom gives us an access of hook (useRouteError), so we can use detailed error msg 

# (ep7part4) children routes
- need to header intact so that other pages render in place of body , you need to create children routes
- import { Outlet } from 'react-router-dom';
- this outlet is the component
- so whenever there is a change in path so this outlet will be filled with the chilren according to the path
- outlet is showing in the dom
- never use a anchor tag in react because the whole page got refreshed instead you use Link (works exactly anchor tag) - link just refreshes the page

# Single page application
- two types of routing in web appications - client side and server side routing
- server side routing- when we click on anchor tag whole page reloads , sends network call fetches contact.html page and renders the ui.
- here we are using client side routing , 
- just the component interchange - spa

# (ep7part5) dyanamic routing
- 