import React, { useState } from 'react';
import axios from 'axios';
import "./addCamera.css";

export default function AddCamera() {
  const [cameraData, setCameraData] = useState({
    location: '',
    camera_type: '',
    ip_address: '',
    nickname: '',
    comments: ''
  });

  const handleInputChange = (e) => {
    setCameraData({ ...cameraData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cameraData);
    try {
      const response = await axios.post('http://localhost:4000/camera', cameraData);
      alert(`Camera added successfully with ID: ${response.data}`);
      // Reset form or redirect as needed
    } catch (error) {
      console.error('Error adding camera:', error);
      alert('Failed to add camera');
    }
  };

  return (
    <div className='editCamera'>
      <h1 className="title">Add Camera</h1>
      <div className="editCameraContainer">
        <div className="form-style-6">
          <form onSubmit={handleSubmit}>
            <input type="text" name="location" placeholder="Location" onChange={handleInputChange} />
            <input type="text" name="camera_type" placeholder="Camera Type" onChange={handleInputChange} />
            <input type="text" name="ip_address" placeholder="IP Address" onChange={handleInputChange} />
            <input type="text" name="nickname" placeholder="Nickname" onChange={handleInputChange} />
            <textarea name="comments" placeholder="Comments" onChange={handleInputChange}></textarea>
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
}