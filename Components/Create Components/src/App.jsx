import React from 'react'

function App() {
  return (
    <div>
      <h1>Ajithkumar R</h1>
    </div>
  )
}

export default App
/* There are 2 type of export
      1. export default
      2. named export 
      */

function Degree() {
  return (
    <div>
      <h1>BE CSE</h1>
    </div>
  )
}

export {Degree, App}