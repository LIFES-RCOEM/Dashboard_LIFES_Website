
interface PROPS {
  ambulance : {
    id: number,
    name: string,
    location: string,
    vehicle_no: string,
    vehicle_type: string,
    is_long_run: number,
  }
}
const Ambulance = (props:PROPS) => {
  const { ambulance } = props
  return (
    <div className="shadow-2xl bg-[#fafafa] rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold text-center">Fleet: {ambulance.name}</h3>
            <div className="flex gap-3 flex-col">
                <p>
                  <b>
                  Vehicle No : 
                </b>
                 {ambulance?.vehicle_no}
                </p>
                <p>
                  <b>
                  Vehicle Type : 
                </b>
                 {ambulance?.vehicle_type == "advance" ? " Advance Life Support" : ambulance?.vehicle_type == "basic" ? " Basic Life Support" : " Mortuary"}
                </p>
                                <p>
                  <b>
                  Does it go for long run : : 
                </b>
                 {ambulance?.is_long_run == 1 ? " Yes" : " No"}
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