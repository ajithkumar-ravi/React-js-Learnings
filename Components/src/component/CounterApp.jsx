import React from 'react'

let count = 0;

function handleIncrease(){
    count += 1;
    console.log(count);
    
}
function handleDecrease(){
    count -= 1;
    console.log(count);
    
}

const CounterApp = () => {
  return (
    <div>
        <h1>Counter Application - {count}</h1>
        <button onClick={ handleIncrease }>Increase</button>
        <button onClick={ handleDecrease }>Decrease</button>
    </div>
  )
}

export default CounterApp