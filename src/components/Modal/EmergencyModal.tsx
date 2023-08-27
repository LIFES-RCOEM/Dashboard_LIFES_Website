import { useContext, useEffect } from 'react' 
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from "./EmergencyModal.module.css";
import { authcontext } from '../../context/Auth';

// interface PROPS {
//   // setshowModal: (showModal: boolean) => void
//   // id: number
// }

const EmergencyModal = () => {
  const location = useLocation()
  // const { setshowModal } = props
  // const [showModal, setshowModal] = useState(false)
  const navigate = useNavigate()
  const { user, setdriver, setowner, notify }  = useContext(authcontext)

  const checkIfFirst = async () => {
        try {
            const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/firstArrived/${localStorage.getItem('id')}/`)
            const response = await data.json()
            console.log(response)
            if( response.status == "200"){
                setdriver(response.message)
                navigate('/dashboard/driver', {state : { data : response.message } })
            } else if (response.status == "201") {
                setowner(response.message)
                navigate('/dashboard/owner', {state : { data : response.message } })
            } 
        } catch (error) {
            notify(0, 'Internal Error, Login Again')
            localStorage.removeItem("islogin")
            localStorage.removeItem("id")
            navigate('/login')
        }
    }

  useEffect( () => {
    if(localStorage.getItem("islogin") == "true"){
      checkIfFirst()
    } else {
      navigate("/login")
    }
  }, [])
  

  return (
    <div className={`${styles["modal-container"]} `} id="myModal" >
      <div className={styles["modal-wrapper"]}>
        <div className={`${styles["modal"]} bg-white shadow-xl relative py-10`}>
          <main className={`${styles["modal-main"]} grid place-content-center gap-8 items-center w-[100%] `}>
            
           <button className="button-orange p-5 rounded-full text-md font-semibold">
              <NavLink
                to="/register/owner"
                state={{ user : user, type: 'ambulances' }}
                className="text-wrapper"
                >
                Fleet Owner Register
              </NavLink>
            </button>
            
           <button className="button-orange p-5 rounded-full text-md font-semibold">
              <NavLink
                to="/register/driver"
                state={{ user : user , type: 'drivers' }}
                className="text-wrapper"
                >
                Driver Register
              </NavLink>
            </button>
          </main>
        </div>
      </div>
    </div>
  )
}


export default EmergencyModal;