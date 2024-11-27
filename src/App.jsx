import './App.css'
import { useState } from 'react'
function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setmessage] = useState("");

let calcBmi =(e)=>{

  e.preventDefault();

  if(weight===0 || height===0)
  {
    alert("Please enter a valid weight and height")
  }
  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    if(bmi<18.5){
      setmessage("you are underweight")
    }
    else if(bmi>=19 && bmi<25){
      setmessage("You are a healthy person")
    }
    else{
      setmessage("You are overweight")
    }
    }
  }



let reload=()=>{
  window.location.reload()
}



  return (
    <div className='app'>
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type='text' placeholder='Enter Weight value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter Height value' value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div>
            <button className="btn" type='submit'>Submit</button>
            <button className="btn"  onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is : {bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App