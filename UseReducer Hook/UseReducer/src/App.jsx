import React, { useReducer, useState } from "react";

const App = () => {

  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT:  "decrement"
  }

  function returnFn(state, action){ // state is a curr stage and dispatch la irundhu data va pass panna adhu indha action la kedaikkum
    // return {count: state.count + 1}
    switch (action.type){
      case "increment":
        return { count : state.count + 1}
      case "decrement":
        return { count : state.count - 1}
    }
  }
  
  const [state, dispatch] = useReducer(returnFn, { count: 1 });

  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount((curr) => (curr += 1));
    dispatch({type: ACTIONS.INCREMENT})
  };

    console.log(state);


  const decrement = () => {
    // setCount((curr) => (curr -= 1));
    dispatch({type: ACTIONS.DECREMENT})
    // dispatch({type: "decrement"})

  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;
