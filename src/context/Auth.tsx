import { createContext, useState } from "react";

export const authcontext = createContext(undefined)

interface PROPS {
    children: React.ReactNode
}

const AuthState = (props: PROPS) => {
    const [isLogin, setisLogin] = useState({
        isLogin: false,
        type: ''
    })

    // TODO: API TO LOGIN
    // TODO: API TO SIGNUP
    // TODO: API TO LOGOUT

    return(
        <authcontext.Provider value={{
            isLogin, setisLogin
        }}>
            {props.children}
        </authcontext.Provider>
    )
}

export default AuthState;

