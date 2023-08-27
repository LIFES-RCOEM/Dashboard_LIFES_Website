import { useState, useContext, useEffect } from 'react'
import styles from './AddAmbulance.module.css'
import { useNavigate,useLocation } from 'react-router-dom'
import { ambulanceContext } from '../../context/Ambulances'
import { authcontext } from '../../context/Auth'

const AddAmbulance = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { owner, checkIfFirst } = useContext(authcontext)
  const { createAmbulance } = useContext(ambulanceContext)
  const [ambulance, setambulance] = useState({
    userId : localStorage.getItem("id"),
    fleatId : owner.id,
    regNumber: "",
    carModel: "",
    type: "",
    evoc: "",
    liscance: "",
    aadhar: "",
    busy: false,
    phone: ""
  })
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    // if(e.target.name == "evoc" ){
    //   const evoc = document.getElementById("evoc") as HTMLInputElement
    //   setambulance({
    //   ...ambulance,
    //     evoc : evoc.files[0].name
    //   })
    // } else if(e.target.name == "liscance" ){
    //   const liscance = document.getElementById("liscance") as HTMLInputElement
    //   setambulance({
    //   ...ambulance,
    //     liscance : liscance.files[0].name
    //   })
    // } else if(e.target.name == "aadhar" ){
    //   const aadhar = document.getElementById("aadhar") as HTMLInputElement
    //   setambulance({
    //   ...ambulance,
    //     aadhar : aadhar.files[0].name
    //   })
    // } else {
    setambulance({
        ...ambulance,
        [e?.target?.name]: e?.target?.value,
    // })
  })
}

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createAmbulance(ambulance, location.state.type)
    if(location.state.type == "ambulances"){
      navigate('/dashboard/owner')
    } else {
      navigate('/dashboard/driver')
    }
  }
 
  useEffect(() => {
    checkIfFirst()
    setambulance({
      ...ambulance, 
      fleatId : owner.id
    })
  }, [])

  return (
    <div className="h-screen w-screen p-6 grid place-content-center gap-5"  >
      <h1 className='text-3xl font-bold'>Fleet Name: XYZ</h1>
      <form onSubmit={handleSubmit} className={`${styles['container']} flex flex-col justify-between m-auto shadow-xl p-5 min-h-[350px] gap-10 min-w-[350px]`} >
        <div className={`${styles["form-group"]}`}>
          <h3>Vehicle Number</h3>
          <input className='border-black border-b-2 focus:outline-none' type="text" name="regNumber" value={ambulance.regNumber} onChange={handleChange} placeholder='MH-31-AB-0000' />
        </div>
        <div className={`${styles["form-group"]}`}>
          <h3>Car Model</h3>
          <input className='border-black border-b-2 focus:outline-none' type="text" name="carModel" value={ambulance.carModel} onChange={handleChange} placeholder='' />
        </div>
        <div className={`${styles["form-group"]}`}>
          <h3>Phone</h3>
          <input className='border-black border-b-2 focus:outline-none' type="text" name="phone" value={ambulance.phone} onChange={handleChange} placeholder='' />
        </div>
        <div className={`${styles["form-group"]}`}>
            <h3>Ambulance Type</h3>
            <label htmlFor="">
              <input onChange={handleChange} type="radio" name="type" value={"Advance"} />
              Advance Life Support
            </label>
            <label htmlFor="">
              <input onChange={handleChange} type="radio" name="type" value={"Basic"} />
              Basic Life Support
            </label>
            <label htmlFor="">
              <input onChange={handleChange} type="radio" name="type" value={"Mortuary"} />
              Mortuary
            </label>
        </div>
        {/* <div className={`${styles["form-group"]}`}>
          <h3>Required Documents</h3>
          <label htmlFor="evoc"><b className='text-blue-500'>Upload</b> EVOC
            <input type="file" name="evoc" id="evoc" accept='application/pdf,image/jpeg,image/jpg,image/png' required hidden />
          </label>
          <label htmlFor="liscance"><b className='text-blue-500'>Upload</b> License
            <input type="file" name="liscance" id="liscance" accept='application/pdf,image/jpeg,image/jpg,image/png' required  hidden/>
          </label>
          <label htmlFor="aadhar"><b className='text-blue-500'>Upload</b> Aadhar Card
            <input type="file" name="aadhar" id="aadhar" accept='application/pdf,image/jpeg,image/jpg,image/png' required  hidden/>
          </label>
        </div> */}
        {/* <div className={`${styles["form-group"]}`}>
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
        </div> */}

        <div className="">
          <button type="submit"  className="bg-orange-500 my-5 p-3 rounded-full text-md font-semibold ">
            Add Ambulance
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddAmbulance