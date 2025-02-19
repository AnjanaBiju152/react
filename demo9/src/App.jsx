import { useState } from "react";
import Register from "./Register";
import Simpleform from "./Simpleform";
import FormObject from "./FormObject";


function App() {
  const [uname, setUname] = useState('')
  const loginUser = (e) => {
    e.preventDefault()//to prevent reloading of the page//hold automatic page refresh
    console.log("inside login function");
    console.log(uname);


  }

  return (
    <>
      <h2>React Forms</h2>
      <form onSubmit={loginUser}>
        <label htmlFor="">User Name</label>
        <input type="text" placeholder="Enter user name" onChange={(e) => setUname(e.target.value)}
          style={{ marginLeft: '10px', borderRadius: '5px', padding: '10px', width: '250px' }} />
        <input type="submit"
          style={{ backgroundColor: 'blue', padding: '10px', marginLeft: '10px', width: '100px', color: 'white' }} value={'login'} />
      </form>
      <Simpleform/>
      <Register />
<FormObject/>
    </>
  )
}

export default App
