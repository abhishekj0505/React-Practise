import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  //let counter = 5

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
    else if (counter = 20) {
      return
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    else if (counter = 0) {
      return
    }
  }

  return (
    <>

      <h1>Counter in REACT</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
