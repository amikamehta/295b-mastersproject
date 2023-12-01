import "./addSchedule.css"
import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Navbar, Button} from 'react-bootstrap';
import axios from 'axios';
export default function AddCamera() {

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    camera_number: '',
    location: '',
    severity: '',
    status: '',
    comments: '',
    assignee: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:4000/schedule', formData);
      console.log(response.data);
      handleOpen(); // Open the modal on successful submission
    } catch (error) {
      console.error('Error adding schedule:', error);
    }
  };



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color:'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className='editCamera'>
      <h1 className="title">Add Schedule</h1>
      <div className="editCameraContainer">
        <div className="form-style-6">
          <form onSubmit={handleSubmit}>
            <input type="number" name="camera_number" placeholder="Camera Number" onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} />
            <input type="text" name="severity" placeholder="Severity" onChange={handleChange} />
            <input type="text" name="status" placeholder="Status" onChange={handleChange} />
            <input type="text" name="comments" placeholder="Comments" onChange={handleChange} />
            <input type="text" name="assignee" placeholder="Assignee" onChange={handleChange} />
            <Button type="submit" className='EditCameraButton' style={{ marginLeft: '220px' }}>Submit</Button>
          </form>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
                New Schedule has been successfully added!
                <Link to={"/schedules"}><button className="Billingbutton">Schedules</button></Link>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}