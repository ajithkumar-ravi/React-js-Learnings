import React, { useEffect, useState } from 'react'

function App() {

  const [num1, setnum1] = useState(100)
  const [num2, setnum2] = useState(1000)

  useEffect(()=>{
    setnum1(200)
    console.log("Happened in UseEffect");

    //----- Memory Clean Up------
    return () => {
      setnum1(100);
      console.log("Memory Cleaned");
      
    }
    
  },[num1])
  console.log(num1);
  // console.log(num2);
  
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={()=> setnum1(curr => curr + 1) }>Add</button>
      <h1>{num2}</h1>
      <button onClick={()=> setnum2(curr => curr + 1) }>Add</button>
    </div>
  )
}

export default App