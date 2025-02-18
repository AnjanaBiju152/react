import Address from "./components/Address"
import ContactDetails from "./components/ContactDetails"
import EductionalDetails from "./components/EductionalDetails"
import LocationDetails from "./components/LocationDetails"
import Random from "./components/Random"
import Usertype from "./components/Usertype"
import './external.css'
function App() {
  const name = "anjana"

  return (
    <>
    <LocationDetails currentLocation={"alappuzha"}
    permanentLocation ={"alappuzha"}
    />
      <h3 style={{
        color: "red"
      }}> User Details</h3>
      
      <EductionalDetails firstname={name} />
      <Address isShow={true} />
      <ContactDetails firstName={name} />
      <Usertype userage=
        {19} />
        <Random/>

    </>

  )
}

export default App
