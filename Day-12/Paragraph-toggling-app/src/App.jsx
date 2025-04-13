import React, { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleParagraph = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="app-container">
      {isVisible && (
        <p id="my-paragraph">This is the paragraph you can toggle.</p>
      )}

      <button id="toggle-btn" onClick={toggleParagraph}>
        Toggle Paragraph
      </button>
    </div>
  );
}

export default App;
