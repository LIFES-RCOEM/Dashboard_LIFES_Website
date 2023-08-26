import { createContext, useState, Dispatch, SetStateAction } from "react"

type Ambulance = {
    id: number,
    name: string,
    location: string,
    status: string,
    driver: string,  
}

interface ContextInterface {
    allAmbulances: Ambulance[],
    setallAmbulances: Dispatch<SetStateAction<Ambulance[]>>
}

const defaultState = {
    allAmbulances: [{
        id: 1,
        name: "string",
        location: "string",
        status: "string",
        driver: "string",
    }],
    setallAmbulances: (allAmbulances : Ambulance[]) => {}
} as ContextInterface

export const ambulanceContext = createContext(defaultState)

interface PROPS {
    children: React.ReactNode
}

const AmbulanceState = (props: PROPS) => {

    const [allAmbulances, setallAmbulances] = useState<Ambulance[]>([{
            id: 1,
            name: "string",
            location: "string",
            status: "string",
            driver: "string",  
    }])

    // TODO: API TO GeT ALL AMBULANCES
    // TODO: API TO ADD AMBULANCE
    // const getAllAmbulances = async () => {
    //     return 1
    // }
    // TOdo: API TO UPDATE AMBULANCE
    // TODO: API TO DELETE AMBULANCE


    return(
        <ambulanceContext.Provider value={{ allAmbulances, setallAmbulances }}>
            {props.children}
        </ambulanceContext.Provider>
    )
}


export default AmbulanceState