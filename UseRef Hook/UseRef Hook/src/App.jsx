import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("")
  
  const inputRef = useRef()

  console.log("Rendered");

  useEffect(() => {
    inputRef.current = input
  }, [input])

  // UseRef eppovum one step backlathe irukkum compare then UseStage
  
  const displaly = () => {
    console.log(inputRef.current.value);
  }
  
  return (
    <div>
      <h1>Input</h1>
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
      {/* <p>My name is: {input}</p> */}

      {/* <input type="text" ref={inputRef} />   */}
      <p>My Name is : {input}</p>
      <p>My Name is : {inputRef.current}</p>
      <button onClick={displaly}>Add</button>
    </div>
  )
}

export default App