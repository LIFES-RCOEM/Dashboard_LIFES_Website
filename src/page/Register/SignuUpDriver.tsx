
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUpDriver = () => {
  const navigate = useNavigate()
  const [driver, setDriver] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    is_from_fleet: null,
    fleet_name: "", 
    vehicle_no: "", 
    vehicle_type: "",
    is_long_run: null,
  })


  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setDriver({
        ...driver,
        [e?.target?.name]: e?.target?.value,
    })

    console.log(driver)
  }
const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Driver SignUp Success")
 navigate('/login', {state : { type: "driver" } })
}
  return (
    <div className="h-screen w-screen p-6 grid place-content-center"   >
        <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
          <h1 className="text-center text-2xl lg:text-3xl font-semibold">
            Sign Up Drivers
          </h1>
                <div className="form-group flex flex-col">
              <label htmlFor="firstname " className="block text-semibold text-gray-400">First Name</label>
              <input name="firstname" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={driver.firstname} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="lastname " className="block text-semibold text-gray-400">Last Name</label>
              <input name="lastname" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={driver.lastname} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="phone " className="block text-semibold text-gray-400">Phone</label>
              <input name="phone" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={driver.phone} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="email " className="block text-semibold text-gray-400">Email</label>
              <input name="email" type="email" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={driver.email} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
            <label htmlFor="password " className="block text-semibold text-gray-400">Password</label>
            <input name="password" type="password" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={driver.password} onChange={handleChange} />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="">
              Are you affiliated with a Fleet?
            </label>
            <label htmlFor="">
              <input type="radio" name="is_from_fleet"  
              value={1} onChange={handleChange} />
              Yes
            </label>
            <label htmlFor="">
              <input type="radio" name="is_from_fleet"  
              value={0} onChange={handleChange} />
              No
            </label>
          </div>
          {
            (driver.is_from_fleet == 1) ?
            <>
              <div className="form-group flex flex-col">
                <label htmlFor="fleet_name " className="block text-semibold text-gray-400">Fleet Name</label>
                <input name="fleet_name" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={driver.fleet_name} onChange={handleChange}  />
              </div>
            </>
            :
            (driver.is_from_fleet == 0)
            && <>
              <i>For individual drivers</i>
              <div className="form-group flex flex-col">
                <label htmlFor="vehicle_no " className="block text-semibold text-gray-400">Vehicle No</label>
                <input name="vehicle_no" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={driver.vehicle_no} onChange={handleChange}  />
              </div>
              <div className="form-group flex flex-col">
                <label htmlFor="vehicle_type " className="block text-semibold text-gray-400">Vehicle Type</label>
                <select name="vehicle_type" className="block border-b-2 border-black pb-2 focus:outline-none" value={driver.vehicle_type} onChange={handleChange} >
                  <option value="advance">Advance Life Support</option>
                  <option value="basic">Basic Life Support</option>
                  <option value="mortuary">Mortuary</option>
                </select>
              </div>
              <div className="form-group flex flex-col">
                <label htmlFor="">
                  Does it go for long run?
                </label>
                <label htmlFor="">
                  <input type="radio" name="is_long_run"  
                  value={1} onChange={handleChange} />
                  Yes
                </label>
                <label htmlFor="">
                  <input type="radio" name="is_long_run"  
                  value={0} onChange={handleChange} />
                  No
                </label>
              </div>
            </>
          }


          <button type="submit" className="bg-orange-400 p-5 rounded-full text-md font-semibold">
            Sign Up
          </button>
          <i>
            Already have an account? 
            <NavLink to={'/login'} state={{
              type: "driver"
            }}
            className="text-blue-500">Login</NavLink>
          </i>
        </form>
    </div>
  )
}

export default SignUpDriver