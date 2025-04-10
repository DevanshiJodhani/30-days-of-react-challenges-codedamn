import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [count, setCount] = useState(0);

  const handleHover = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="container">
      <button data-testid="button" className="hover-button" onMouseEnter={handleHover}>
        Hover Me
      </button>
      <h1 data-testid="count" className="counter">{count}</h1>
    </div>
  );
};

export default App;
