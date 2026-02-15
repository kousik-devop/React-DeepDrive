import React, { useState } from 'react'

function Besics() {
  const [num, setNum] = useState(0);

  return (
    <div className="app">
      <div className="counter">
        <h1>{num}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => setNum(num + 1)}>Increase</button>
      <button onClick={() => setNum(num - 1)}>Decrease</button>
      </div>
    </div>
  )

}

export default Besics