import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title; // title from line 4
  };
  useEffect(updateTitle, [title]);
  //updateTitle: componentDidMount, [title]: componentWillUpdate
  return setTitle;
};

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
