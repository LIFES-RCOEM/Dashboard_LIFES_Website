import { NavLink } from "react-router-dom"


const DriverDashboard = () => {


  const logOut = () => {
    // localStorage.removeItem('isLogin')
    console.log("logout")
  }
  
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
      <div className="dashboard">
        Status: Active 
      </div>
    </div>
  )
}

export default DriverDashboard