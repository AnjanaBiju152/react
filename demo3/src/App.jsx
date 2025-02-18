import Home from "./Home"
import Random from "./Random"


function App() {
  
const name ="anjana"
 const location ="alappuzha"
  return (
    <>
      <h3>Class Components</h3>

      <Random userMessage={"message from app"}/>
      <Home firstName ={name} place={location}
      pin ={688007}/>

    </>
  )
}

export default App
