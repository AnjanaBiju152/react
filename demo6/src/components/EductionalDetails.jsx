 import React from 'react'

function EductionalDetails(userdata) {
    console.log(userdata);
    
  return (
<>
<h3>Educational Details</h3>
<h5>Name:{userdata.firstname}</h5>
<h5>Qualification:btech</h5>
<h5>Passout year:2024</h5>

</>
  )
}

export default EductionalDetails