import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const SignUpOwner = () => {
  const navigate = useNavigate()
  const [owner, setOwner] = useState({
    firstname: "",
    lastname: "",
    fleet_name: "",
    phone: "",
    email: "",
    password: "",
    is_from_fleet: null
  })


  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setOwner({
        ...owner,
        [e?.target?.name]: e?.target?.value,
    })

  }
const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Owner SignUp Success")
    navigate('/login', {state : { type: "owner" } })
}
  return (
    <div className="h-screen w-screen p-6 grid place-content-center"   >
        <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
          <h1 className="text-center text-2xl lg:text-3xl font-semibold">
            Fleet Owner Registration
          </h1>
                <div className="form-group flex flex-col">
              <label htmlFor="firstname " className="block text-semibold text-gray-400">First Name</label>
              <input name="firstname" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={owner.firstname} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="lastname " className="block text-semibold text-gray-400">Last Name</label>
              <input name="lastname" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={owner.lastname} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="fleet_name " className="block text-semibold text-gray-400">Fleet Name</label>
              <input name="fleet_name" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={owner.fleet_name} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="email " className="block text-semibold text-gray-400">Business Email</label>
              <input name="email" type="email" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={owner.email} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
            <label htmlFor="password " className="block text-semibold text-gray-400">Password</label>
            <input name="password" type="password" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={owner.password} onChange={handleChange} />
          </div>
          <button type="submit" className="bg-orange-400 p-5 rounded-full text-md font-semibold">
            Sign Up
          </button>
          <i>
            Already have an account? 
            <NavLink to={'/login'} state={{
              type: "owner"
            }}
            className="text-blue-500">Login</NavLink>
          </i>
        </form>
    </div>
  )
}

export default SignUpOwner