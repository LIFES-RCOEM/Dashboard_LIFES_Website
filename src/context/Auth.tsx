import { createContext, useState } from "react";
import {  toast } from "react-toastify"

type User ={ 
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
}

type FORMDATA = {
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

type LOGINFORM = {
    username: string,
    password: string
}

interface ContextInterface {
    user : User,
    setuser: (user: User) => void,
    UesrSignup:  (formData: FORMDATA) => Promise<{status: string, data: string}>,
    LoginUser: (formData : LOGINFORM) => void,
    notify: (type: number, message: string) => void,
    checkIfFirst: () => void,
    driver: any,
    owner: any,
    setdriver: (driver: any) => void,
    setowner: (owner: any) => void
}

const defaultState = {
    user : {
        id : 0,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
    },
    setuser: (user: User) => undefined,
    UesrSignup: (formData: FORMDATA) => Promise.resolve({status: "400", data: "Failed"}),
    LoginUser : (formData : LOGINFORM) => undefined ,
    notify : (type: number, message: string) => undefined, 
    checkIfFirst : () => undefined,
    driver: {},
    owner: {},
    setdriver: (driver: any) => undefined,
    setowner: (owner: any) => undefined
} as ContextInterface

export const authcontext = createContext(defaultState)

interface PROPS {
    children: React.ReactNode
}

const AuthState = (props: PROPS) => {
    // const [isLogin, setisLogin] = useState({
    //     isLogin: false,
    //     type: ''
    // })

    // const [loginUser, setloginUser] = useState({})

    const [user, setuser] = useState({
        id : 0,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
    })
    const [driver, setdriver] = useState({})
    const [owner, setowner] = useState({})
    // COMPLETED: API TO REGISTER
    const UesrSignup = async (formData : FORMDATA) => {
        console.log("trying signup")

            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const responseData = await response.json();

                // Assuming the response is in JSON format
                // You can update the logic here to handle different response types

                console.log(responseData)
                return responseData
            } catch (error) {
                console.log(error)
                return {status : "500" , data : "Failed" }
            }
    }  
        // DONE : LOGIN
    const LoginUser = async (formData : LOGINFORM) => {
        console.log("trying login")

            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const responseData = await response.json();

                // Assuming the response is in JSON format
                // You can update the logic here to handle different response types
                console.log(responseData)
                localStorage.setItem("islogin", "true")
                localStorage.setItem("id", `${responseData.user.id}`)
                setuser(() => {
                    return {
                        id: responseData.user.id,
                        username: responseData.user.username,
                        first_name: responseData.user.first_name,
                        last_name: responseData.user.last_name,
                        email: responseData.user.email,
                    }
                })
                return responseData
            } catch (error) {
                console.log(error)
                localStorage.removeItem("islogin")
                localStorage.removeItem("id")
                return {status : "500" , data : "Failed" }
            }
    } 

// * toastify - notification
    const notify = (type= 1, message:string) => {
    if(type == 1){
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 2000
      });
    } else {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 2000,
      });
    }
        }

  // * check if the login is from a driver user or owner
    const checkIfFirst = async () => {
        try {
            const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/firstArrived/${localStorage.getItem('id')}/`)
            const response = await data.json()

            if( response.status == "200"){
                setdriver(response.message)
                return {
                    link: '/dashboard/driver',
                    data: response.message
                }
            } else if (response.status == "201") {
                setowner(response.message)
                return {
                    link: '/dashboard/owner',
                    data: response.message
                }
            } 
        } catch (error) {
            return {
                    link: '/login',
                    data: "Failed"
                }
        }
    }


    // TODO: API TO LOGOUT

    return(
        <authcontext.Provider value={{
            UesrSignup,
            LoginUser,
            notify,
            user,
            checkIfFirst,
            driver, owner,
            setdriver, setowner,
        }}>
            {props.children}
        </authcontext.Provider>
    )
}

export default AuthState;

