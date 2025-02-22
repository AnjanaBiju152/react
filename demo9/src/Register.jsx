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
        console.log("final data");
        console.log(userData);


    }
    const getUserData = (e) => {
        let fieldName = e.target.name;
        let userValue = e.target.value;

        setUserData({ ...userData, [fieldName]: userValue })



    }
    return (
        <>
            <h2 style={{ color: 'green' }}>Register form</h2>
            <form onSubmit={registerUser}>


                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Enter name" name="uName" onChange={(e) => getUserData(e)}
                    style={{ marginLeft: '10px', borderRadius: '5px', padding: '10px', width: '250px' }} />

                <div style={{ marginTop: '20px' }}>

                    <label htmlFor="" style={{ fontSize: '20px' }}>Gender</label>
                    <input type="radio" name="uGender" id="" style={{ marginLeft: '20px' }} value="male" onChange={(e) => getUserData(e)} />
                    <label htmlFor="">Male</label>

                    <input type="radio" name="uGender" id="" value="female" onChange={(e) => getUserData(e)} />
                    <label htmlFor="">Female</label>

                    <input type="radio" name="uGender" id="" value="others" onChange={(e) => getUserData(e)} />
                    <label htmlFor="">Other</label>

                </div>
                <div style={{ marginTop: '20px' }}>

                    <label htmlFor="">COURSE</label>
                    <select name="uCourse" id="" style={{ marginLeft: '20px' }} onChange={(e) => getUserData(e)}>
                        <option value="Cse">CSE</option>
                        <option value="Civil">CIVIL</option>
                        <option value="Mec">MEC</option>
                        <option value="Ece">ECE</option>
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