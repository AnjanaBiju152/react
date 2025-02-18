import Home from "./Home"

function App() {
  const show = () => {
    alert("user clicked")
  }
  function loginUser() {
    alert("user logged")
  }
  const print = (data) => {
    alert(`${data}`)
  }
  const getName =(e) =>{
    let uname = e.target.value;
    console.log(uname);
    
    
  }
  const getEmail =(e) =>{
    let uemail = e.target.value;
    console.log(uemail);
  }
  return (
    <>

      <h3>React Events</h3>
      <button style={{
        color: 'white',
        backgroundColor: 'black',
        margin: '20px',
        borderRadius: '5px',
        padding: '10px'
      }} onClick={show}>SUBMIT</button>
      <button onClick={loginUser}>Login</button>
      {/* call fuction with arguments */}
      <br />
      <button onClick={() => print('anjana')}>Print Name</button>
      <br />
      <br />

      <input type="text" placeholder="enter username" style={{
        padding:'10px',margin:'20px', borderRadius:'10px',width:'300px'
      }} onChange={(e) =>getName(e)}/>
      <input type="text" placeholder="enter email" style={{
        padding:'10px', margin:'20px', borderRadius:'10px',width:'300px'
      }} onChange={(e)=>getEmail(e)}/>
      <Home/>
    </>
  )
}

export default App
