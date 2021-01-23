import React, { useState } from "react";
import ReactDom from "react-dom";

function App() {
  const [item, setItem] = useState(1);
  const increment = () => setItem(item + 1);
  const decrement = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>This is count {item}</h1>
      <h2>Click any button below and see what happen</h2>
      <button onClick={increment}>increse</button>
      <button onClick={decrement}>decrese</button>
    </div>
  );
}

export default App;
