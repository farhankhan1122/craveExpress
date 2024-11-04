import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <>
    <h1>Ops!!!!</h1>
    <h2>Something went wrong..</h2>
    <h3>{err.data}</h3>
    <h3>{err.status}</h3>
    </>
  )
}

export default Error;