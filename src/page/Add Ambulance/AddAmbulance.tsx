import { useState } from 'react'
import styles from './AddAmbulance.module.css'
import { useNavigate } from 'react-router-dom'

const AddAmbulance = () => {
  const navigate = useNavigate()
  const [admbulance, setadmbulance] = useState({
    vehicle_no : "",
    vehicle_type : "",
    is_long_run : 0, // 0 - false 1-true
  })
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setadmbulance({
        ...admbulance,
        [e?.target?.name]: e?.target?.value,
    })
  }

  return (
    <div className="h-screen w-screen p-6 grid place-content-center gap-5"  >
      <h1 className='text-3xl font-bold'>Fleet Name: XYZ</h1>
      <form className={`${styles['container']} flex flex-col justify-between m-auto shadow-xl p-5 min-h-[350px] gap-10`} >
        <div className={`${styles["form-group"]}`}>
          <h3>Vehicle Number</h3>
          <input className='border-black border-b-2 focus:outline-none' type="text" name="vehicle_no" onChange={handleChange} placeholder='MH-31-AB-0000' />
        </div>
        <div className={`${styles["form-group"]}`}>
            <h3>Ambulance Type</h3>
            <label htmlFor="">
              <input onChange={handleChange} type="radio" name="vehicle_type" value={"advance"} />
              Advance Life Support
            </label>
            <label htmlFor="">
              <input onChange={handleChange} type="radio" name="vehicle_type" value={"basic"} />
              Basic Life Support
            </label>
            <label htmlFor="">
              <input onChange={handleChange} type="radio" name="vehicle_type" value={"mortuary"} />
              Mortuary
            </label>
        </div>
        <div className={`${styles["form-group"]}`}>
          <h3>Required Documents</h3>
          <p>
            1) Aadhar Card <br />
            2) EVOC Certificate
          </p>
          <input type="file" accept='' />
        </div>
        <div className={`${styles["form-group"]}`}>
          <h3>Will Ambulance go for a long run</h3>
          <p>
            <i>
              Example, from Nagpur to Wardha or from Nagpur to Mumbai
            </i>
          </p>
          <label htmlFor="">
            <input onChange={handleChange} type="radio" name="is_long_run" value={1} />
            Yes
          </label>
          <label htmlFor="">
            <input onChange={handleChange} type="radio" name="is_long_run" value={0} />
            No
          </label>
        </div>

        <div className="">
          <button onClick={() => {
            console.log(admbulance)
            alert("ambulance added")
            navigate("/dashboard/owner")
          }} className="bg-orange-500 my-5 p-3 rounded-full text-md font-semibold ">
            Add Ambulance
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddAmbulance