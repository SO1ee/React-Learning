import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  let addValue = () => {
    if (counter >=20) { 
      counter = 20
    }else{ 
      counter = counter + 1;
    }
    setCounter(counter)
    console.log(counter)
    
  }
  const removeValue = () => { 
    if (counter > 1) { 
      counter = counter - 1
    }else{ 
      counter =0
    }
    
    setCounter(counter)
    console.log(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
