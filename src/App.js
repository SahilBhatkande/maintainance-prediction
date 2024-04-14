// App.js
import React from 'react';
import AirCompressor from './AirCompressor';
import './App.css';
import { sensorData } from './data'; // Import sensorData from data.js

function App() {
  return (
    <div className="app-container">
      <h1 className="page-heading">AirCompressor</h1>
      <div className="boxes-container">
        {/* Map over each sensor and value in sensorData */}
        {Object.entries(sensorData).map(([sensorName, { value, unit }], index) => (
          <AirCompressor key={index} sensorName={sensorName} sensorValue={value} unit={unit} />
        ))}
      </div>
    </div>
  );
}

export default App;
