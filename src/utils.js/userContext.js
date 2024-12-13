import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User"
})

// what is we wanted to change the state 

export default UserContext;