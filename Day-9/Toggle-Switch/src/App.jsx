import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  const buttonStyle = {
    padding: '1.5rem 3rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: isOn ? 'black' : 'lightgray',
    color: isOn ? 'white' : 'black',
    transition: 'all 0.3s ease',
  };

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <button id="toggle" style={buttonStyle} onClick={handleToggle}>
        {isOn ? 'on' : 'off'}
      </button>
    </div>
  );
};

export default Toggle;
