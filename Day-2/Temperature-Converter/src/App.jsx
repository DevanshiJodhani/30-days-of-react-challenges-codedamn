import { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState((0 * 9) / 5 + 32);

  // Celsius
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((value * 9) / 5 + 32);
  };

  // Fahrenheit
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(((value - 32) * 5) / 9);
  };

  return (
    <div className="converter">
      <h1>Temperature Converter</h1>
      <div className="input-group">
        <label htmlFor="celsius">Celsius:</label>
        <input
          type="number"
          id="celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="fahrenheit">Fahrenheit:</label>
        <input
          type="number"
          id="fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default App;
