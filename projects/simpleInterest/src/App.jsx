
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle, setPrinciple] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');
  const [interest, setInterest] = useState(0);

  //state for checking is field values are valid
  const [isPrincipleValid, setIsPrincipleValid] = useState(true);
  const [isRateValid, setRateValid] = useState(true);
  const [isYearValid, setYearValid] = useState(true);

  const validate = (e) => {
    const input_field = e.target.name;
    const input_value = e.target.value;
    console.log(input_field, input_value);
    if (input_value.match(/^[0-9]*$/)) {
      console.log(" input valid");

      if (input_field === 'principle_amount') {
        setIsPrincipleValid(true);
        setPrinciple(input_value)
      }
      else if (input_field === 'rate_interest') {
        setRateValid(true)
        setRate(input_value)
      }
      else if (input_field === 'number_year') {
        setYearValid(true);
        setYear(input_value)
      }
    }
    else {
      if (input_field === 'principle_amount') {
        setIsPrincipleValid(false);
        setPrinciple(input_value)
      }
      else if (input_field === 'rate_interest') {
        setRateValid(false);
        setRate(input_value)

      }
      else if (input_field === 'number_year') {
        setYearValid(false);
        setYear(input_value)
      }

    }
  }
  const handleCalculator = (e) => {
    e.preventDefault();
    console.log("Principle:"), principle;
    console.log("Rate:"), rate;
    console.log("year:"), year;
    if (principle === '' || rate === '' || year === '') {
      alert("please enter all values")
    }
    else {
      const result = (principle * rate * year) / 100
      setInterest(result)
    }



  }
const handleReset =()=>{
  setInterest(0);
  setPrinciple('');
  setRate('');
  setYear('');
}

return (
  <>
    <div style={{ backgroundColor: 'black', height: '100vh' }} className="d-flex justify-content-center align-items-center">

      <div style={{ backgroundColor: 'white', width: '500px' }}
        className="rounded p-1">
        <h2 style={{ textAlign: 'center' }}>SIMPLE INTEREST</h2>
        <p style={{ textAlign: 'center' }}>Calculate Your  Simple Interest Easily</p>
        <div style={{ backgroundColor: 'orange', height: '150px' }} className="d-flex justify-content-center align-items-center flex-column mt-3 rounded shadow">
          <h2 className="fw-bold"><span>&#8377;</span> {interest}</h2>
          <p className="fw-bold">Total Simple Interest</p>
        </div>
        <form action="" className='mt-4' onSubmit={handleCalculator}>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Principle" variant="outlined" className='w-100' name='principle_amount'
              onChange={(e) => validate(e)} value={principle}
            />
            {
              !isPrincipleValid &&
              <p style={{ color: 'red' }}>Input Invalid</p>
            }
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Rate Of Interest" variant="outlined" className='w-100' name='rate_interest'
              onChange={(e) => validate(e)} value={rate}
            />
            {
              !isRateValid &&
              <p style={{ color: 'red' }}>Input Invalid</p>
            }
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Number Of Years" variant="outlined" className='w-100' name='number_year'
              onChange={(e) => validate(e)} value={year}
            />
            {
              !isYearValid &&
              <p style={{ color: 'red' }}>Input Invalid</p>
            }
          </div>

          <div className='d-flex justify-content-between mb-3'>
            <Button variant="contained" color='success' style={{ width: '190px', padding: '10px' }}
              disabled={!isPrincipleValid || !isRateValid || !isYearValid} type='submit'>CALCULATE</Button>

            <Button variant="outlined" style={{ width: '190px', padding: '10px' }} onClick={handleReset}>RESET</Button>
          </div>
        </form>
      </div>
    </div>

  </>
)
}

export default App
