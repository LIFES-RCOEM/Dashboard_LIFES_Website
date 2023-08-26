import { useLocation } from "react-router-dom"
import AuthForm from "../../components/auth_form/AuthForm"


const Login = () => {
  const location = useLocation()
  return (
   <div className="h-screen w-screen p-6 "  >
      <AuthForm type={location.state.type} />
    </div>
  )
}

export default Login