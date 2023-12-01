import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./updateCamera.css";

export default function UpdateCamera() {
  const [cameraData, setCameraData] = useState({
    id: '',
    location: '',
    camera_type: '',
    ip_address: '',
    nickname: '',
    comments: ''
  });
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    setCameraData({ ...cameraData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/camera/${cameraData.id}`, cameraData);
      setOpen(true);
    } catch (error) {
      console.error('Error updating camera:', error);
    }
  };

  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className='editCamera'>
      <h1 className="title">Update Camera</h1>
      <div className="editCameraContainer">
        <div className="form-style-6">
          <form onSubmit={handleSubmit}>
            <input type="text" name="id" placeholder="Camera ID" onChange={handleInputChange} />
            <input type="text" name="location" placeholder="New Location" onChange={handleInputChange} />
            <input type="text" name="camera_type" placeholder="New Camera Type" onChange={handleInputChange} />
            <input type="text" name="ip_address" placeholder="New IP Address" onChange={handleInputChange} />
            <input type="text" name="nickname" placeholder="New Nickname" onChange={handleInputChange} />
            <textarea name="comments" placeholder="Comments" onChange={handleInputChange}></textarea>
            <Button type="submit" className='EditCameraButton' style={{ marginLeft: '220px' }}>Submit</Button>
          </form>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            Camera Details have been successfully updated!
            <Link to={"/viewcamera"}><button className="Billingbutton">Camera Page</button></Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
