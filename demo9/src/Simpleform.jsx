// import React from 'react'

import { useState } from "react"

function Simpleform() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(firstName);
        console.log(email);
        console.log(mobile);


    }
    return (
        <>
            <h2 style={{ color: 'orange' }}>Simple Form</h2>
            <form action="" onSubmit={handleRegister}>

                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="">First Name</label>
                    <input type="text"  placeholder ="enter name" onChange={(e) => setFirstName(e.target.value)}
                        style={{ marginLeft: '30px', borderRadius: '5px', padding: '10px', width: '250px' }} />
                </div>
                <div style={{ marginTop: '20px', }}>
                    <label htmlFor="">Email Id</label>
                    <input type="text" placeholder="enter email id" onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: '45px', borderRadius: '5px', padding: '10px', width: '250px' }} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="">Mobile Number</label>
                    <input type="text"  placeholder ="enter mobile number" onChange={(e) => setMobile(e.target.value)} style={{ marginLeft: '5px', borderRadius: '5px', padding: '10px', width: '250px' }} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type="submit" style={{ padding: '10px', marginLeft: '30px', color: 'white', backgroundColor: 'orange', width: '150px', borderRadius: '5px' }}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Simpleform