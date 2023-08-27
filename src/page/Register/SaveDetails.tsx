
import {  useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import { authcontext } from '../../context/Auth'

const SignUpDriver = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // const { driver, setDriver } = useContext(authcontext)
  // const [ driver, setDriver] = useState({
  //   userId : 1, 
  //   phone: "", 
  //   regNumber : "",
  //   carModel : "",
  //   type : "",
  //   evoc : "", 
  //   liscance : "",
  //   aadhar : "",
  //   busy : "",
  //   first : true
  // })

  const [fleetOwner, setfleetOwner] = useState({
    userId: localStorage.getItem("id"),
    companyName : "",
    phone : "", 
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setfleetOwner({
        ...fleetOwner,
        [e?.target?.name]: e?.target?.value,
    })
  }

const submitFleetData = async() => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/fleats/`, 
  {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    }, 
    body: JSON.stringify(fleetOwner)
  })
  const res = await response.json()
  return res
}
const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await submitFleetData()
    if(response.status == "201"){
      navigate('/dashboard/owner', {state : { data : location.state.user } })
    } else {
      alert("Failed!")
    }
}
// console.log(fleetOwner)
  return (
    <div className="h-screen w-screen p-6 grid place-content-center"   >
      <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
          
        <div className="form-group flex flex-col">
          <label htmlFor="companyName " className="block text-semibold text-gray-400">Company Name</label>
          <input name="companyName" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={fleetOwner.companyName} onChange={handleChange}  />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="phone " className="block text-semibold text-gray-400">Phone</label>
          <input name="phone" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={fleetOwner.phone} onChange={handleChange}  />
        </div>


        <button type="submit" className="bg-orange-400 p-5 rounded-full text-md font-semibold">
           Save & Go to Dashboard
        </button>
      </form>
       
    </div>
  )
}

export default SignUpDriver