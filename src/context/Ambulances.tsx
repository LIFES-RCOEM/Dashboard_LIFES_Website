import { createContext, useState } from "react"

export const ambulanceContext = createContext(undefined)

interface PROPS {
    children: React.ReactNode
}

const AmbulanceState = (props: PROPS) => {

    const [allAmbulances, setallAmbulances] = useState([])

    // TODO: API TO GeT ALL AMBULANCES
    // TODO: API TO ADD AMBULANCE
    // const getAllAmbulances = async () => {
    //     return 1
    // }
    // TOdo: API TO UPDATE AMBULANCE
    // TODO: API TO DELETE AMBULANCE


    return(
        <ambulanceContext.Provider value={{
            allAmbulances, setallAmbulances
        }}>
            {props.children}
        </ambulanceContext.Provider>
    )
}


export default AmbulanceState