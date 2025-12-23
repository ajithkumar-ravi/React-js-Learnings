import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  
  const inputRef = useRef(null) 
  
  useEffect(() => {
    inputRef.current.focus()
  },[])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(  `Use Email : ${inputRef.current.value} `);
  }


  return (
    <div>
      <form>
        <label htmlFor="">Enter Email Id : </label>
        <input
          type="email"
          value={email}
          ref={inputRef}
          onChange={(evant) => setEmail(evant.target.value)}
        />
        <button onClick={handleSubmit}> Submit</button>
      </form>

      <h1>{email}</h1>
      {email && !email.includes("@") &&  <p style={{color: "red"}}> Invalid Email, Missing "@"</p>}
      
    </div>
  );
};

export default App;
