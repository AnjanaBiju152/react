import Home from "./Home"
import UserDetails from "./UserDetails"


function App() {
  const mystyle = {
    height: "300px",
    width: "300px",
    backgroundColor: "yellow"
  }

  return (
    <>
          <Home/>
          <UserDetails/>
      <h2 style={{ color: "red" }}>Home Page</h2>
      <h4 style={{ color: "green" }}>React</h4>
      <h4 style={{ color: "orange", fontSize: "30px", backgroundColor: "grey" }}> Angular</h4>
      <div style={mystyle}></div>

    </>
  )
}

export default App
