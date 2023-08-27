import { useContext, useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { authcontext } from "../../context/Auth"
import { ToastContainer } from "react-toastify"

const SignUpOwner = () => {
  const navigate = useNavigate()
  const { UesrSignup, notify, checkIfFirst } = useContext(authcontext)

  const [formData, setformData] = useState({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: ""
  })
  // const [owner, setOwner] = useState({
  //   firstname: "",
  //   lastname: "",
  //   username: "" ,
  //   fleet_name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   is_from_fleet: null
  // })

  // const getAll =  () => {
  //   fetch("http://localhost:8000/ambulances")
  //   .then(data => data.json())
  //   .then(response => console.log(response))
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }
  // useEffect(() => {
  //   getAll()
  // }, [])


  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setformData({
        ...formData,
        [e?.target?.name]: e?.target?.value,
    })

  }
const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await UesrSignup(formData)
   
    if (data.status == "201") {
      notify(1, "Successfully Registered")
      navigate('/login')
    } else {
      notify(0, "Failed to Register")
    }
}

  useEffect(() => {
    if(localStorage.getItem("islogin") == "true"){
      const data = checkIfFirst()
      navigate(data.link, {state : { data : data.data }})
    }
  }, [])
  
  return (
    <div className="h-screen w-screen p-6 grid place-content-center"   >
        <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
          <h1 className="text-center text-2xl lg:text-3xl font-semibold">
            Sign up
          </h1>
                <div className="form-group flex flex-col">
              <label htmlFor="first_name " className="block text-semibold text-gray-400">First Name</label>
              <input name="first_name" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.first_name} onChange={handleChange} required minLength={3} />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="last_name " className="block text-semibold text-gray-400">Last Name</label>
              <input name="last_name" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.last_name} onChange={handleChange} required minLength={3}  />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="lastname " className="block text-semibold text-gray-400">User Name</label>
              <input name="username" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.username} onChange={handleChange}  />
            </div>
            {/* <div className="form-group flex flex-col">
              <label htmlFor="fleet_name " className="block text-semibold text-gray-400">Fleet Name</label>
              <input name="fleet_name" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.fleet_name} onChange={handleChange}  />
            </div> */}
            <div className="form-group flex flex-col">
              <label htmlFor="email " className="block text-semibold text-gray-400">Email</label>
              <input name="email" type="email" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.email} onChange={handleChange}  required minLength={5} />
            </div>
            <div className="form-group flex flex-col">
            <label htmlFor="password " className="block text-semibold text-gray-400">Password</label>
            <input name="password" type="password" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.password} onChange={handleChange} required minLength={4} />
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
        <ToastContainer />
    </div>
  )
}

export default SignUpOwner