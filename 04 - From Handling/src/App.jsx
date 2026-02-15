import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    setname("");
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <h1>Login</h1>
        <input
        value={name}
        type="text" 
        placeholder="Enter your name" 
        onChange = {(e) => setname(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default App;
