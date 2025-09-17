import React from "react";
import styled from "styled-components";

let Button = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  hight: 100px;
`;

let NewButton = styled(Button)`
  background-color: red;
  box-shadow: 10px 10px 5px black;
`;

function printSomething(){
  console.log("Hello");
  
}
const Content = () => {
  return (
    <main>
      <h1 style={{ backgroundColor: "red", color: "white" }}>Main Contents</h1>
      <Button onClick={printSomething}>Click Me</Button>
      <NewButton>New btn</NewButton>
    </main>
  );
};

export default Content;
