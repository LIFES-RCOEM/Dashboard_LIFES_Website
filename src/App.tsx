import { useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './page/Login/Login'
import SignUpDriver from './page/Register/SignuUpDriver'
import OwnerDashboard from './page/Owner/OwnerDashboard'
import DriverDashboard from './page/Driver/DriverDashboard'
import EmergencyModal from './components/Modal/EmergencyModal'
import SignUpOwner from './page/Register/SignUpOwner'
import AddAmbulance from './page/Add Ambulance/AddAmbulance'



function App() {
  // const [isLogin, setisLogin] = useContext(authcontext)
  const [showModal, setshowModal] = useState(true)
  console.log(showModal)
  return (
    <>
      <BrowserRouter>
      {/* { showModal && <EmergencyModal setshowModal={setshowModal} />} */}
        <Routes>
          <Route path="/" element={<EmergencyModal setshowModal={setshowModal} />} />
          <Route path="/add_ambulance" element={<AddAmbulance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/owner" element={<SignUpOwner />} />
          <Route path="/register/driver" element={<SignUpDriver />} />
          <Route path="/dashboard/owner" element={<OwnerDashboard />} />
          <Route path="/dashboard/driver" element={<DriverDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
