import React, { useState, useMemo, useCallback } from "react";
import "./App.css";
const Item = React.memo(({ number, onClick }) => {
  console.log("Item rendered:", number);
  return (
    <p className="item" onClick={() => onClick(number)}>
  Item {number}
    </p>
  );
});

function App() {
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState(false);

  const doubleValue = useMemo(() => {
    console.log("Calculating...");
    for (let i = 0; i < 100000000; i++) {}
    return count * 2;
  }, [count]);

  const handleClick = useCallback((num) => {
    console.log("Clicked item:", num);
  }, []);

  return (
  <div className="container">
    <div className={`card ${theme ? "dark" : ""}`}>
      <h3 className="heading">Simple Optimization Example</h3>
      <p>Double Value: {doubleValue}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <button onClick={() => setTheme(!theme)}>
        Toggle Theme
      </button>
      <Item number={count} onClick={handleClick} />
    </div>
  </div>
);
}

export default App;
