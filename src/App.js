import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore at voluptate nihil, aliquam est consequatur, quam quo provident illo ex in explicabo distinctio! Quam repudiandae enim tempora nulla fuga.",
  },
  {
    tab: "Section 2",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore at voluptate nihil, aliquam est consequatur, quam quo provident illo ex in explicabo distinctio! Quam repudiandae enim tempora nulla fuga.",
  },
];

function App() {
  return (
    <div className="App">
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
    </div>
  );
}

export default App;
