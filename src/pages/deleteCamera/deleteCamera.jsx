import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./deleteCamera.css";

export default function DeleteCamera() {
  const [cameraId, setCameraId] = useState('');
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    setCameraId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:4000/camera/${cameraId}`);
      setOpen(true);
    } catch (error) {
      console.error('Error deleting camera:', error);
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
    <div className='editCameraDelete'>
      <h1 className="title">Delete Camera</h1>
      <div className="editCameraContainer">
        <div className="form-style-6">
          <form onSubmit={handleSubmit}>
            <input type="text" name="cameraId" placeholder="Camera ID" onChange={handleInputChange} />
            <Button type="submit" className='EditUserButton' style={{ marginLeft: '220px' }}>Submit</Button>
          </form>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            Camera Details have been successfully deleted!
            <Link to={"/viewcamera"}><button className="Billingbutton">Camera Page</button></Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
