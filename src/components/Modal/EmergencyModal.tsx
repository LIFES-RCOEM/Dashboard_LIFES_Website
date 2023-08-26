
import { NavLink } from 'react-router-dom';
import styles from "./EmergencyModal.module.css";

interface PROPS {
  setshowModal: (showModal: boolean) => void
}

const EmergencyModal = (props: PROPS) => {
  const { setshowModal } = props


  return (
    <div className={`${styles["modal-container"]} `} id="myModal" >
      <div className={styles["modal-wrapper"]}>
        <div className={`${styles["modal"]} bg-white shadow-xl relative py-10`}>
          <main className={`${styles["modal-main"]} grid place-content-center gap-8 items-center w-[100%] `}>
            
           <button className="button-orange p-5 rounded-full text-md font-semibold">
              <NavLink
                to="/register/owner"
                className="text-wrapper"
                onClick={() => setshowModal(false)}
                >
                Fleet Owner Register
              </NavLink>
            </button>
            
           <button className="button-orange p-5 rounded-full text-md font-semibold">
              <NavLink
                to="/register/driver"
                className="text-wrapper"
                onClick={() => setshowModal(false)}
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