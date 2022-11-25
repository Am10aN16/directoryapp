import React, { useState } from 'react'

const Signup = () => {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [Address, setAddress] = useState("");
const[otp , setOtp] = useState("");
const [requestedOtp, setrequestedOtp] = useState(false);
const[isphoneVerified, setisphoneVerified] = useState(false);

const sendotp = async ()=>{
    try {
        setrequestedOtp(true);
    } catch (error) {
        console.log(error);
    }
}

const verifyOtp = async ()=>{
    try {
        setisphoneVerified(true);
        alert(`Your Otp is verified ${otp}`)
    } catch (error) {
        console.log(error);
    }
}

const submitForm =async ()=> {
    try {
        if(isphoneVerified===false){
          return alert("Please verify the phone first")
        }else{
            alert("Form Submitted Successfully")
        }
    } catch (error) {
        console.log(error);
    }
   
}

  return (
    <div>

<form>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value) } id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Contact No</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" value={phone} onChange={(e)=> setPhone(e.target.value) } id="inputPassword3"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Address</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={Address} onChange={(e)=> setAddress(e.target.value) } id="inputPassword3"/>
    </div>
  </div>
 
 {requestedOtp===true?<>

    <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label"> OTP</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" value={otp} onChange={(e)=> setOtp(e.target.value) } id="inputPassword3"/>
    </div>
  </div>
 
  <button type="button" className="btn btn-primary " onClick={()=>verifyOtp()} >Verify Otp</button>
 </>:
 <>
 <button type="button" className="btn btn-primary" onClick={sendotp}>Send Otp</button>
 </>}
</form>
<button type="submit" className="btn btn-primary mt-3" onClick={submitForm}>Register</button>
    </div>
  )
}

export default Signup