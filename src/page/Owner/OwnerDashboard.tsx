import { useEffect, useContext } from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Ambulance from "../../components/Card/Ambulance"
import { authcontext } from '../../context/Auth'
import { ambulanceContext } from '../../context/Ambulances'

const OwnerDashboard = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { user, checkIfFirst, owner , notify} = useContext(authcontext)
  const { allambulances, getAllAmbulances } = useContext(ambulanceContext)
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




const logout =  () => {
  localStorage.removeItem("islogin")
  localStorage.removeItem("id")
  notify(1 , "Logged Out Successfully")
  navigate('/login')
}
  
  useEffect( () => {
    if(!localStorage.getItem("islogin")){
      navigate("/login")
    }
    getAllAmbulances()
  }, [])


  return (
    <div className="w-full md:w-[50%] m-auto p-5">
      <div className="flex justify-between items-center my-5 ">
        <h1 className="text-2xl font-semibold">
          Welcome to your Dashboard
        </h1>
          <div className="flex items-center">
            <NavLink to="/login" className="" onClick={logout}>
              <button className="bg-black text-white p-2 text-md lg:text-xl font-semibold rounded-full">
                Log Out
              </button>
            </NavLink>
        </div>
      </div>
      { allambulances.length > 0 ? <ul className="list">
        {allambulances.map((ambulance) => (
          <Ambulance key={ambulance.id} ambulance={ambulance} />
        ))}
      </ul> : 
        <>
          No ambulances yet!
        </>
      }
      <div className="flex justify-center items-center">
        <NavLink to="/add_ambulance" state={{ type: "ambulances" }} className="m-auto" >
          <button className="bg-orange-500 p-5 rounded-full text-md lg:text-xl font-semibold">
            Add Ambulance
          </button>
        </NavLink>
      </div>

    </div>
  )
}

export default OwnerDashboard