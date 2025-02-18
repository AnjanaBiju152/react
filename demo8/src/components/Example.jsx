// import React from 'react'
import { useState } from 'react'

function Example() {
    const [name,setName] = useState("anjana")
  return (
    <>
    <h2>useState() hook</h2>
    <h4 style ={{
        color:'red',fontWeight:800
    }}>Name:{name}</h4>
    <button onClick={()=>setName('anju')}>Change Name</button>
    </>
  )
}

export default Example