import React from "react";
import styled from "styled-components";

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
      <h1 style={{ backgroundColor: "red", color: "white" }}>Main Contents - {user}</h1>
      <Button onClick={printSomething}>Click Me</Button>
      <NewButton onClick={(e)=>{printSomething1(e)}}>New btn</NewButton>
    </main>
  );
};

export default Content;
