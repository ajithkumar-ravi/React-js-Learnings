import React from "react";
import User from "./User";

function App() {
  const userData = {
    name: "kumar",
    age: 20,
    id: "kumar@gmail.com",
  };
  return (
    <div>
      <h1>Ajithkumar R</h1>
      <User name={userData.name} age={userData.age} id={userData.id} />
    </div>
  );
}

export default App;
/* There are 2 type of export
      1. export default
      2. named export 
      */

function Degree() {
  return (
    <div>
      <h1>BE CSE</h1>
    </div>
  );
}

export { Degree, App };
