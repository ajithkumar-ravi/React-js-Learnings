import React, { useState } from "react";

const CounterApp = () => {
  // let count = 0;

  let [count, setCount] = useState(0);

  function handleIncrease() {
    // count += 1;
    // console.log(count);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    // this is best practice above mentioned
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  function handleDecrease() {
    //     count -= 1;
    //     console.log(count);
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h1>Counter Application - {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default CounterApp;
