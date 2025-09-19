import React, { useState } from "react";

const CounterApp = () => {
  // let count = 0;

  let [count, setCount] = useState(0);

  function returnState() {
    console.log(100);
    return 100;
  }

  //state
  let [sample, setSample] = useState(() => {
    return returnState();
  });

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
      <h2>
        Counter Application - {count} - {sample}{" "}
      </h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default CounterApp;
