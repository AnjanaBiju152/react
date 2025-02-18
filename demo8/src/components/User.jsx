//  import React from 'react'

function User() {
    const userArray = [

        { firstName: 'anjana', age: 23 },
        { firstName: 'anju', age: 24 },
        { firstName: 'anjali', age: 26 },
        { firstName: 'anu', age: 20 },
        { firstName: 'arjun', age: 21 },
        { firstName: 'ammu', age: 23 },
    ]
    return (
        <>
            <h2 style={{ color: 'red' }}>USE DETAILS</h2>
            <table>
                <thead>
                    <tr>
                        <td>SL NO</td>
                        <td> NAME</td>
                        <td>AGE</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userArray.map((item,index) => {
                            return(
                            
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>

    )
}

export default User