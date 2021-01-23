import React from "react";

const useConfirm = (message = "", onConfirm, onCancle) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancle && typeof onCancle !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancle();
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
