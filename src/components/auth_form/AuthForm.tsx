import { useState, useContext, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { authcontext } from '../../context/Auth'
// import { authcontext } from '../../context/Auth'

const AuthForm = () => { 
  const isSignUp = false
  const navigate = useNavigate()
  const { LoginUser, notify , checkIfFirst} = useContext(authcontext)
  const [formData, setformData] = useState({
      username: "",
      password: ""
})

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setformData({
        ...formData,
        [e?.target?.name]: e?.target?.value,
    })
}


const login = async() => {
    const data = await LoginUser(formData)
    if (data.status == "200") {
      notify(1, "Successfully Logged In")
      navigate(`/choose`, {state: {id : data?.user?.id , user: data?.user}})
    } else {
      notify(0, "Failed to Login")
    }
}

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      login()
  }
 

  useEffect( () => {
    if(localStorage.getItem("islogin") == "true"){
      navigate("/choose")
    } 
  }, [])
  return (
    <div className="w-full h-full glass grid place-content-center ">
      
        <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
          <h1 className="text-center text-2xl lg:text-3xl font-semibold">
            Log In
          </h1>

          <div className="form-group flex flex-col">
            <label htmlFor="username " className="block text-semibold text-gray-400">Username</label>
            <input name="username" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.username} onChange={handleChange}  />
          </div>

          <div className="form-group flex flex-col">
            <label htmlFor="password " className="block text-semibold text-gray-400">Password</label>
            <input name="password" type="password" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.password} onChange={handleChange} />
          </div>
          {/* { isSignUp ? <div className="subheading">
            Already have an account? <NavLink to="/" className="text-blue-500">Login</NavLink>
          </div> :  */}
           <div className="subheading">
            Don't have an account? 
            <NavLink to="/" className="text-blue-500">Sign Up.</NavLink>
          </div>
          {/* } */}
          { isSignUp ? <button type="submit" className="bg-black py-2 text-white font-bold"
          >
            Create Account
          </button>
          :
          <button className="bg-black py-2 text-white font-bold"
            type='submit'
          >
            Log In
          </button>
          }
        </form>
    </div>
  )
}

export default AuthForm