import { useState, useEffect, useContext } from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { authcontext } from '../../context/Auth'
import { ambulanceContext } from '../../context/Ambulances'


const DriverDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { checkIfFirst, user } = useContext(authcontext)
  const { driverInfo, getDriverInfo} = useContext(ambulanceContext)


  const logOut = () => {
    // localStorage.removeItem('isLogin')
    console.log("logout")
    localStorage.removeItem("islogin")
    localStorage.removeItem("id")
    navigate("/login")
  }

  useEffect( () => {
    if(!localStorage.getItem("islogin")){
      navigate("/login")
    }

  }, [])
  
  return (
    <div className="w-full md:w-[60%] m-auto py-5">
      <div className="flex items-center justify-between my-5">
        <h1 className="text-2xl font-semibold">
        Hello, Driver
      </h1>
            <div className="flex items-center">
            <NavLink to="/" className="" onClick={logOut} >
              <button className="bg-black text-white p-2 text-md lg:text-xl font-semibold">
                Log Out
              </button>
            </NavLink>
        </div>
      </div>
      <div className="">
        <b>Status</b>: {driverInfo.busy ? "Busy" : "Free"} 
      </div>
      <div className="">
        <b>Name</b>: {user.first_name + " " + user.last_name} 
      </div>
      <div className="">
        <b>Username</b>: {user.username} 
      </div>
    </div>
  )
}

export default DriverDashboard