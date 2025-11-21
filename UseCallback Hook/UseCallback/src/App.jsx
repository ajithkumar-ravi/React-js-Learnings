import React, { useCallback, useState } from 'react'
import List from './list'


//  UseCallback always return entire funtion but useMeno always ret
// urn a value this is the difference b/w useCallback and UseMeno

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const showNum = number

  const getItem = useCallback( () => {
    return [number + 1, number + 2, number + 3];
  }, [number]);

  const styleComp = {
    backgroundColor: dark? "black": "white",
    color: dark? "white" : "black",
  }
  return (
    <div style={styleComp}>
      <input type="number" value={number} onChange={(event) => setNumber(parseInt(event.target.value))} />
      <button onClick={() => setDark(dark => !dark)}>Change theme</button>
      {/* <div style={styleComp}>{showNum}</div> */}
      <List getItem={getItem}/>
    </div>
  )
}

export default App