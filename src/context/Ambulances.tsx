import { createContext, useState, Dispatch, SetStateAction, useContext } from "react"
import { authcontext } from "./Auth"

type Ambulance = {
    fleatId: number,
    regNumber: string,
    carModel: string,
    type: string,
    evoc: string,
    liscance: string,
    aadhar: string,
    busy: boolean
}

type Driver = {
    id: number,
    userId: number,
    type: string,
    regNumber: string,
    carModel: string,
    busy: string
}

interface ContextInterface {
    driverInfo: any,
    setdriverInfo: Dispatch<SetStateAction<Driver>>,
    getDriverInfo: () => void, 
    createAmbulance: (ambulance : Ambulance, type: string) => void, 
    allAmbulances: any, 
    getAllAmbulances: () => void

}

const defaultState = {
    driverInfo: {},
    setdriverInfo: ( ) => undefined,
    getDriverInfo: () => undefined,
    createAmbulance: () => undefined,
    allAmbulances: [],
    getAllAmbulances: () => undefined

} as ContextInterface

export const ambulanceContext = createContext(defaultState)

interface PROPS {
    children: React.ReactNode
}

const AmbulanceState = (props: PROPS) => {
    const [allambulances, setallambulances] = useState([])
    const { user, checkIfFirst, owner } = useContext(authcontext)
    const [driverInfo, setdriverInfo] = useState({})

    // TODO: API TO GeT ALL AMBULANCES
    // const getAllAmbulances = async () => {
    //     // const data = await fetch() 

    // }

    // TODO: API TO ADD AMBULANCE
    
    // TOdo: API TO UPDATE AMBULANCE
    // TODO: API TO DELETE AMBULANCE

    // TODO: get driver info
    const getDriverInfo = () => {
        if(user.id == 0 || localStorage.id == undefined){
            window.location.href = "/login"
            localStorage.removeItem("islogin")
            localStorage.removeItem("id")
        }
            fetch(`${import.meta.env.VITE_BACKEND_URL}/driver/${localStorage.id}`)
            .then(data => data.json())
            .then(response => {
                console.log(response)
                // setallambulances()
            })
        }

    // TODO : create ambulance
    const createAmbulance = async (ambulance , type="ambulances") => {
        let data= {}
        if(type == "ambulances"){
            data = {
                fleatId : owner.id,
                regNumber: ambulance.regNumber,
                carModel: ambulance.carModel,
                type: ambulance.type,
                evoc: ambulance.evoc,
                liscance: ambulance.liscance,
                aadhar: ambulance.aadhar,
                busy: false,
            } 
        } else {
            data = {
                userId: localStorage.getItem("id"),
                phone : ambulance.phone,
                regNumber: ambulance.regNumber,
                carModel: ambulance.carModel,
                type: ambulance.type,
                evoc: ambulance.evoc,
                liscance: ambulance.liscance,
                aadhar: ambulance.aadhar,
                busy: false,
            }
        }
        try {
            
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${type}/`,
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify(data)
        })
        const res = await response.json()
        console.log(res)
        return res
        } catch (error) {
            console.log(error)
        }
    }

    // TODO : Get all ambulance of a fleet owner
    const getAllAmbulances = async () => {
        const response = await checkIfFirst()
        console.log(response)
        fetch(`${import.meta.env.VITE_BACKEND_URL}/ambulanceid/${response.data.id}`)
        .then(data => data.json())
        .then(response => {
            console.log(response)
            setallambulances(response.data)
        })
    }



    return(
        <ambulanceContext.Provider value={{ allambulances, setallambulances, driverInfo, getDriverInfo, createAmbulance, getAllAmbulances }}>
            {props.children}
        </ambulanceContext.Provider>
    )
}


export default AmbulanceState