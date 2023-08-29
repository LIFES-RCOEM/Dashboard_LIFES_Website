import { useContext } from "react"
import { authcontext } from "../../context/Auth"

interface PROPS {
  ambulance : {
    fleatId : number,
    regNumber:  string,
    carModel:   string,
    type: string,
    evoc: string,
    liscance: string,
    aadhar: string,
    busy: boolean,
  }
}
const Ambulance = (props:PROPS) => {
  const { ambulance } = props
  const { owner } = useContext(authcontext)
  return (
    <div className="shadow-2xl bg-[#fafafa] rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold text-center">{"Fleet: " + owner.companyName}</h3>
            <div className="flex gap-3 flex-col">
                <p>
                  <b>
                  Registration No : 
                </b>
                 {ambulance?.regNumber}
                </p>
                <p>
                  <b>
                  Vehicle Type : 
                </b>
                 {ambulance?.type == "Advance" ? " Advance Life Support" : ambulance?.type == "Basic" ? " Basic Life Support" : " Mortuary"}
                </p>
                                <p>
                  <b>
                  Current Status : : 
                </b>
                 {ambulance?.busy == true ? "On Duty" : "Idle"}
                </p>
                {/* <p><b>Phone:</b> {ambulance?.phone}</p>
                <p><b>Email</b>: {ambulance?.email}</p> */}
            </div>
            {/* <div className="mt-5">
                <p><b className='mb-2'>Address<br/></b> {donation.organization.address}</p>
            
                <p><b className='mb-2'>Description<br/></b> {donation.description}</p>
            </div> */}
        </div>
  )
}

export default Ambulance