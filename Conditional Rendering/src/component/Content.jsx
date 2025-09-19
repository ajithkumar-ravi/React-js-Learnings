import React from "react";
import styled from "styled-components";
import CounterApp from "./CounterApp";

let Button = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  hight: 100px;
  padding: 10px;
`;

let NewButton = styled(Button)`
  background-color: red;
  box-shadow: 10px 10px 5px black;
`;

let user = "Dhanush";

function printSomething(e){
  // console.log("Hello");
  user = "Johny";
}
function printSomething1(evant){
  // console.log(user);
  user = "Settan";
  
}

 
const Content = () => {
  return (
    <main>
      <CounterApp/>
    </main>
  );
};

export default Content;
