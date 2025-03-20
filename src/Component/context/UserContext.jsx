import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export function UserContextProvider({ children }) {
    const [userTheme, setUserTheme] = useState("")
    console.log("useerTheme color",userTheme);
    return (
        <UserContext.Provider value={{ userTheme, setUserTheme }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;