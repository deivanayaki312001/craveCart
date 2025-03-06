import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default name"
})
export default UserContext;