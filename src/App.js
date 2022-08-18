import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const handleAdd = () => {
    setCount(count + 1);
  };

  function setDown() {
    setCount(count - 1);
  }

  const handleSub = () => {
    setDown();
  };

  return (
    <>
      <div className="btns">
        <Button className="subtract" onClick={handleSub}>
          Subtract
        </Button>
        <h2>{count}</h2>
        <Button className="add" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <br />
      {isOpen ?? (
        <div>
          <h1 style={{ textAlign: "center" }}>Yippie !!</h1>
        </div>
      )}
    </>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
