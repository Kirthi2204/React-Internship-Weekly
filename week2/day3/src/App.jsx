import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
  }, [title]);
  const handleClear = () => {
    setTitle("");
  };
  
  return (
    <div className="page">
      <div className="card">
        <h2>Document Title</h2>
        <input type="text" placeholder="Enter document title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <div className="btn-group">
          <button className="clear-btn" onClick={handleClear}>Clear</button>
        </div>
        <p className="hint">
          Browser tab title as you type.
        </p>
      </div>
    </div>
  );
}

export default App;
