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
  let [data, setData] = useState("Loading"); // loading, success, error

  function returnState() {
    console.log(100);
    return 100;
  }

  //state
  let [sample, setSample] = useState(() => {
    return returnState();
  });

  let message ;
  let remainingClicks = 10 - count;

  function handleIncrease() {
    // count += 1;
    // console.log(count);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    // this is best practice above mentioned
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  if (count < 10) {
    message = (
      <div>
        <h3>You Clicked {count} Times</h3>
        <p>You still {remainingClicks} more times to reach a 10% Discount</p>
      </div>
    )
  }
  else if (count >= 10 && count < 20) {
    message = (
      <div>
        <h3>You Clicked {count} Times</h3>
        <p>Congrats! You unlocked 10% Discount👌</p>
      </div>
    )
  }
  else {
    message = (
      <div>
        <h3>You Clicked {count} Times</h3>
        <p>Congrats! Anne Neeyane Idhuuu.. You Unlocked 20% Discount👌</p>
      </div>
    )
  }
    


  function handleDecrease() {
    //     count -= 1;
    //     console.log(count);
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  let displayComponent = () => {
    
    switch (data) {
      case "Loading": return <LoadingComponent />;
        break;
      case "Success": return <SuccessComponent />;
        break;
      case "Error": return <ErrorComponent />;
        break;  
    
    }
  }

  return (
    <div>
      <h2>Click to unlock Reward ✨ </h2>
      <Button onClick={handleIncrease}>Click</Button>
      {message}
      {
        count >= 30 && <Button onClick={ResetCount}>Reset Click</Button>
      }

      {
        displayComponent()
      }

      {/* Ternary Operatior */}
      {/* {count >= 10 ? (
        <p>You unlocked 10% Discount</p>
      ) : (
        <p>Click 10 time to unlock Reward</p>
      )} */}
      {/* logical AND Operatior */}
      {/* {
        count >= 20 && <p>Ennadhu 20% Discount ah</p>
      } */}
    </div>
  );
};

export default CounterApp;

function LoadingComponent() {
  return (
    <h6>Loading....</h6>
  )
}

function SuccessComponent() {
  return (
    <h6>Success✨</h6>
  )
}

function ErrorComponent() {
  return (
    <h6>Error❌</h6>
  )
}