import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter, setcounter]  = useState(5)
  
  //let counter = 5
  const addValue = () => {
    if (counter < 20){
      counter = counter + 1
    setcounter(counter)
    }
    
  }

  const removeValue = () => {
    if(counter > 0){
      setcounter(counter - 1)
    }
   
  }

  return (
    <>
     <h1>chai aur react{counter}</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value{counter}</button>
     <br />
     <button onClick={removeValue}>Substract Value{counter}</button>
    </>
  )
}

export default App
