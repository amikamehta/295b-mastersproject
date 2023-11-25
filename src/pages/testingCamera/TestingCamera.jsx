import React from 'react';
import "./testingCamera.css";

const CameraStream = () => {
  return (
    <div className='testingTitle'>
      <h1>IP Camera Stream</h1>
      <div className='frameCamera'>
      <iframe
        title="Camera Stream"
        src="http://209.181.16.167:8082/"
        style={{ width: '400px', height: '400px', border: 'none' }}
      />

    <iframe
        title="Camera Stream"
        src="http://104.207.27.126:8080/"
        style={{ width: '400px', height: '400px', border: 'none' }}
      />
    </div>
    </div>
  );
};

export default CameraStream;
