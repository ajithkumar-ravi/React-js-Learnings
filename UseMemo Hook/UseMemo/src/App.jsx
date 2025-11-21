import React, { useMemo, useState } from 'react'

function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber =  useMemo(() => slowFunction(number)
, [number])
  const themeStyle = {
    backgroundColor: dark? "blue": "red",
    color: dark? "white": "black",
  }
  return (
    <div>
      <input type="number" value={number} onChange={(event)=>setNumber(event.target.value)} />
      <button onClick={()=> setDark((curr)=> !curr)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
}

export default App

function slowFunction(num){
  for(let i=0; i<1000000000 ; i++ ){}
  return num * 2
}