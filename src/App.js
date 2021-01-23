import React, { useState, useEffect, useRef } from "react";

function App() {
  const input = useRef();
  setTimeout(() => input.current.focus(), 3000);
  // it's like getElementById()
  return (
    <div className="App">
      <h1>Hi</h1>
      <input ref={input} placeholder="type" />
    </div>
  );
}

export default App;
