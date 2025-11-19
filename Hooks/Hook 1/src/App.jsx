import React, { useState } from 'react'

function App() {

    const [count, setcount] = useState(1)
    let x = 1;
    const handleFunc = () => {
      // x = x + 1;
      // console.log("x", x);
      // setcount(2)
  }
    console.log("count is :", count);
    
  return (
    <div>
      <h1>Score {count}</h1>
      <button onClick={() => setcount(count + 5)}>Add</button>
    </div>
  )
}

export default App