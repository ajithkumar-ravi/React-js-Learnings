import React, { useEffect, useState, useLayoutEffect } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    console.log("UseEffect - ", count)
  }, [count])
  
  console.log("renderd");
  
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=> setCount(curr => curr + 1)}>Add</button>
    </div>
  )
}

export default App