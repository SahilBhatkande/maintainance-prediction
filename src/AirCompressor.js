// AirCompressor.js
import React from 'react';
import './AirCompressor.css';

const AirCompressor = ({ sensorName, sensorValue, unit }) => {
  return (
    <div className="air-compressor-container">
      <div className="card">
        <div className="sensorName">{sensorName}</div>
        <hr /> {/* Horizontal line after sensorName */}
        <div className="value">{sensorValue}</div><hr />
        <div className="unit">{unit}</div> {/* Display unit */}
      </div>
    </div>
  );
}

export default AirCompressor;
