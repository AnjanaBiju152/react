// import React from 'react'

function EmployeeDetails() {

    const empDetails = [

        { emp_id:123,Name: 'anjana',dept:'hr',salary: 23000 },
        { emp_id:123,Name: 'anju',dept:'developer',salary: 25000 },
        { emp_id:123,Name: 'anjana',dept:'tester',salary: 70000 },
        
    ]
        
    
  return (
    <>
    <h2>EMPLOYEE DETAILS</h2>
    <table>
        <thead>
            <tr>
<td>EMP ID</td>
<td>EMP NAME</td>
<td>Department</td>
<td>Salary</td>

            </tr>
        </thead>
        <tbody>
{
    empDetails.map((emp)=>(
        <tr>
        <td>{emp.emp_id}</td>
        <td>{emp.Name}</td>
        <td>{emp.dept}</td>
        <td>{emp.salary}</td>
        </tr>

    ))
}
        </tbody>
    </table>
    </>
    
  )
}

export default EmployeeDetails