// import React from 'react'

import { useState } from "react";

function FormObject() {
    const [userData,setUserData] = useState({
        uFirstName:'',
        uEmail:'',
        uMobNo:''
    }

    )
    const userRegister =(e)=>{
        e.preventDefault()
        console.log(userData);
        
    }
  return (
    <>
    <h2 style={{color:'orange'}}>form with state as object</h2>
    <form action="" onSubmit={userRegister}>

<div style={{ marginTop: '20px' }}>
    <label htmlFor="">First Name</label>
    
    <input type="text"  placeholder ="enter name"  onChange={(e)=>setUserData({...userData,uFirstName:e.target.value})}
        style={{ marginLeft: '30px', borderRadius: '5px', padding: '10px', width: '250px' }} />
</div>
<div style={{ marginTop: '20px', }}>
    <label htmlFor="">Email Id</label>
    <input type="text" placeholder="enter email id" onChange={(e)=>setUserData({...userData,uEmail:e.target.value})} style={{ marginLeft: '45px', borderRadius: '5px', padding: '10px', width: '250px' }} />
</div>
<div style={{ marginTop: '20px' }}>
    <label htmlFor="">Mobile Number</label>
    <input type="text"  placeholder ="enter mobile number" onChange={(e)=>setUserData({...userData,uMobNo:e.target.value})} style={{ marginLeft: '5px', borderRadius: '5px', padding: '10px', width: '250px' }} />
</div>
<div style={{ marginTop: '20px' }}>
    <button type="submit" style={{ padding: '10px', marginLeft: '30px', color: 'white', backgroundColor: 'orange', width: '150px', borderRadius: '5px' }}>Submit</button>
</div>
</form>
    </>
  )
}

export default FormObject