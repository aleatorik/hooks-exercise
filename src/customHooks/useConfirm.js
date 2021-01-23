import React from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

function App() {
  const deleteAccount = () =>
    console.log("Delete the account the current user has");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteAccount, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the account</button>
    </div>
  );
}

export default App;
