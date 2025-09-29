import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  hight: 100px;
  background-color: blue;
  color: white;
  padding: 10px;
`;
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
      <h2>Click to unlock Reward ✨ {count}</h2>
      <Button onClick={handleIncrease}>Click</Button>
      {/* Ternary Operatior */}
      {count >= 10 ? (
        <p>You unlocked 10% Discount</p>
      ) : (
        <p>Click 10 time to unlock Reward</p>
      )}
      {/* logical AND Operatior */}
      {
        
      }
    </div>
  );
};

export default CounterApp;
