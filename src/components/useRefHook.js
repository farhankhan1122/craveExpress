// useRef creates a mutable variable which will not re-render the component
// to access a DOM elememt directly


import React, { useEffect, useRef, useState } from "react"


export const UseRefHook = () => {
    const [data, setData] = useState('')
    // const [count, setCount] = useState()

    // const count = useRef(10)
    const inputElem = useRef("")
    // console.log(count);

    const changeStyle = () => {
        console.log(inputElem);
        console.log(inputElem.current);
        inputElem.current.style.backgroundColor = "red"
        inputElem.current.focus()
    }

    // useEffect(() => {
        // setCount(count + 1)d
        // count.current = count.current + 1
    // })
    return (
        <div className="" style={{display: "flex", justifyContent: "center"}}>
            <input ref={inputElem} value={data} type="text" onChange={(e) => {setData(e.target.value)}}  />
            <br />
            {/* <p>{count.current}</p> */}
            <button onClick={changeStyle} >click</button>
        </div>
    )
} 

export default UseRefHook