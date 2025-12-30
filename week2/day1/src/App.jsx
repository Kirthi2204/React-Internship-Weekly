import React, { useState } from "react";
import './App.css';
function Counter() {
  const [count , setCount] = useState(0);
  const [showCount , setShowCount] = useState(true);
  return(
    <div className='counter-container'>
      <h1>Counter App</h1>
      {showCount && <h2 className='counter-value'>{count}</h2>}
      <div className='button-group'>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <button className='toggle-button' onClick={() => setShowCount(!showCount)}>
        {showCount ? "Hide Count" : "Show Count"}
      </button>
    </div>
  );
}
export default Counter;