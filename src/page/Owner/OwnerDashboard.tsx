import { NavLink } from "react-router-dom"
import Ambulance from "../../components/Card/Ambulance"

const OwnerDashboard = () => {
  const allAmbulances = [
    {
      id: 1,
      name: "Ambulance 1",
      location: "Lagos",
      vehicle_no: "MH 31 1234",
      vehicle_type: "advance",
      is_long_run: 0,
    },
    {
      id: 2,
      name: "Ambulance 2",
      location: "Lagos",
      vehicle_no: "MH 31 1234",
      vehicle_type: "basic",
      is_long_run: 1,
    },
    {
      id: 3,
      name: "Ambulance 3",
      location: "Lagos",
      vehicle_no: "MH 31 1234",
      vehicle_type: "mortuary",
      is_long_run: 0,
    },
  ]

//  const handleNextPage = async () => {
//         fetch(`${BASE_URL}/api/v1.0/donations/all?page=${pageNo + 1}&limit=${5}&is_admin=true`)
//             .then(( response ) => response.json())
//             .then(( data ) => {
//                 console.log('data: ', data.data);
//                 if(data.data.data.length > 0) {
//                     setpageNo(pageNo + 1)
//                     fetchDonations(5, pageNo+1)
//                 } else {
//                     setpageNo(pageNo)
//                 }
//             })
//             .catch(( error ) => {
//                 console.error('Error fetching donations:', error)
//             });


//     }

//     const handlePrevPage = async () => {
//         if(pageNo > 1) {
//            fetchDonations(5, pageNo - 1)
//             setpageNo(pageNo - 1)
//         }
//     }


  return (
    <div className="w-full md:w-[50%] m-auto py-5">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-2xl font-semibold">
          Welcome to your Dashboard
        </h1>
          <div className="flex items-center">
            <NavLink to="/" className="" >
              <button className="bg-black text-white p-2 text-md lg:text-xl font-semibold">
                Log Out
              </button>
            </NavLink>
        </div>
      </div>
      <ul className="list">
        {allAmbulances.map((ambulance) => (
          <Ambulance key={ambulance.id} ambulance={ambulance} />
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <NavLink to="/add_ambulance" className="m-auto" >
          <button className="bg-orange-500 p-5 rounded-full text-md lg:text-xl font-semibold">
            Add Ambulance
          </button>
        </NavLink>
      </div>

    </div>
  )
}

export default OwnerDashboard