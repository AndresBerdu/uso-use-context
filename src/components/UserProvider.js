import React, { useContext, useState } from "react";

const userContext = React.createContext();
const usertToggleContext = React.createContext();

export function useUserContext(){
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(usertToggleContext);
}

export function UserProvider(props) {

    const [user, setUser] = useState(null);

    const cambiarLogin = () => {
        if(user) {
          setUser(null);
        } else {
          setUser ({
            name: "Andres",
            email: "andres@gmail.com"
          });
        }
    }

    return(
        <userContext.Provider value={user}>
            <usertToggleContext.Provider value={cambiarLogin}>
                {props.children}
            </usertToggleContext.Provider>
        </userContext.Provider>
    )
}