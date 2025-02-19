// import React from 'react'

import { useState } from "react";

function Register() {
    const [userData, setUserData] = useState({
        uName: '',
        uGender: '',
        uCourse: ''
    })
    const registerUser = (e) => {
        e.preventDefault()
    

    }
    const getUserData=(e)=> {
        console.log(e.target.value);
        console.log(e.target.name);
        
        
    }
    return (
        <>
            <h2 style={{ color: 'green' }}>Register form</h2>
            <form onSubmit={registerUser}>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Enter name" name="uName" onChange={(e)=>getUserData(e)}
                    style={{ marginLeft: '10px', borderRadius: '5px', padding: '10px', width: '250px' }} />
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="" style={{ fontSize: '20px' }}>Gender</label>
                    <input type="radio" name="gender" id="" style={{ marginLeft: '20px' }} />
                    <label htmlFor="">Male</label>
                    <input type="radio" name="gender" id="" />
                    <label htmlFor="">Female</label>
                    <input type="radio" name="gender" id="" />
                    <label htmlFor="">Other</label>

                </div>
                <div style={{ marginTop: '20px' }}>

                    <label htmlFor="">COURSE</label>
                    <select name="" id="" style={{ marginLeft: '20px' }} >
                        <option value="">CSE</option>
                        <option value="">CIVIL</option>
                        <option value="">MEC</option>
                        <option value="">ECE</option>
                    </select>
                </div>
                <div>
                    <input type="submit" style={{ backgroundColor: 'blue', padding: '10px', marginTop: '10px', width: '100px', color: 'white' }} value={'REGISTER'} />
                </div>
            </form>
        </>
    )
}

export default Register