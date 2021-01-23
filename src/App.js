import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //fire the event below when componentWillUnMount is triggered
    return () => element.current.removeEventListener("click", onClick);
  }, []); // with [], EventListener will be executed once in componentDidMount. without [], the eventListener will be added everytime update is made.
  return element;
};

function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
