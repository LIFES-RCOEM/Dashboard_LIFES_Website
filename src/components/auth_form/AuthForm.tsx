import {useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom"

const AuthForm = ({ isSignUp=false , type="owner" }) => { 
  const navigate = useNavigate()
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
})

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setUser({
        ...user,
        [e?.target?.name]: e?.target?.value,
    })
}


const login = () => {
    alert("Login Success")
    navigate(`/dashboard/${type}`)
}
const signUp = () => {
    alert("SignUp Success")
    navigate('/')
}


const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSignUp) {
        signUp()
    } else {
        login()
    }
}

  return (
    <div className="w-full h-full glass grid place-content-center ">
      
        <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
          <h1 className="text-center text-2xl lg:text-3xl font-semibold">
            {isSignUp ? "Sign Up" : "Login"}
          </h1>
          { isSignUp &&
          <>
            <div className="form-group flex flex-col">
              <label htmlFor="firstname " className="block text-semibold text-gray-400">First Name</label>
              <input name="firstname" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={user.firstname} onChange={handleChange}  />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="lastname " className="block text-semibold text-gray-400">Last Name</label>
              <input name="lastname" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={user.lastname} onChange={handleChange}  />
            </div>
            </>
          }
          <div className="form-group flex flex-col">
            <label htmlFor="email " className="block text-semibold text-gray-400">Email</label>
            <input name="email" type="email" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={user.email} onChange={handleChange}  />
          </div>
          { isSignUp && <div className="form-group flex flex-col">
            <label htmlFor="email" className="block text-semibold text-gray-400">Email</label>
            <input name="email" type="email" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={user.email} onChange={handleChange}  />
          </div>}
          <div className="form-group flex flex-col">
            <label htmlFor="password " className="block text-semibold text-gray-400">Password</label>
            <input name="password" type="password" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={user.password} onChange={handleChange} />
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