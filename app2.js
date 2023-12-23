// react component
import React from "react";
import ReactDOM  from "react-dom/client";
// react element 
const logoutElement =(
    <p>Logout</p>
)
// use this element inside jsx using {}

const Logout = () => {
    return (
        <div style={{width: '100%',background:'black',color:'red',display:'grid',placeContent:'center',fontSize:'14px',textTransform:'uppercase'}}>
            {logoutElement}
        </div>
    )
}
const navLogout = (
    <Logout />
)

const Header = () => {
   return <nav style={{height:'40px',background: 'black',color: 'white',position:'sticky',top:'0',right:'0',left:'0',display:'flex',alignItems:'center',zIndex:'1'}}>
        <div style={{width:'70%'}}>
            <ul style={{display:'grid',gridAutoFlow:'column',gap:'20px',fontSize:'18px',fontWeight:'600',color:'inherit'}}>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>
        <div style={{width:'30%',height:'100%'}}>
            {navLogout}
        </div>
    </nav>
}
const Main = () => {
    return (
        <div style={{background:'#ccc',color:'black',width:'100%',height:'100%',position:'relative'}}>
            {/* <Header /> */}
            <h1 style={{width: '100%',color:'black',display:'grid',placeContent:'center'}}>
                Main Component
            </h1>
        </div>
    )
}
const SideNav = () => {
    return (
        <div style={{width: '100px', background: 'red',color: 'white',display:'flex',flexDirection: 'column',justifyContent:'space-between',height:'100%'}}>
            <ul>
                <li>list-1</li>
                <li>list-2</li>
                <li>list-3</li>
                <li>list-4</li>
                <li>list-5</li>
            </ul>
            <Logout />
        </div>
    )
}
const Body = () => {
    return (
        <div style={{width:'100%'}}>
            {/* <Header /> */}
            {/* or */}
            {/* <Header></Header> */}
             {/* or */}
             {Header()}
             
            {/* you call also call functional component using interpolation{} */}
            {/* you can do any js operation inside interpolation */}
            <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center'}}>
            <SideNav />
            <Main />
        </div>
        </div>
    )
}
// const newRoot = ReactDOM.createRoot(document.getElementById("root-new"))

const rootA = ReactDOM.createRoot(document.getElementById("rootA"))
rootA.render(<Body />)