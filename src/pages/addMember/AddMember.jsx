import "./addMember.css"
import React, { useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Navbar, Button} from 'react-bootstrap';
import axios from 'axios';

export default function AddCamera() {

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    age: '',
    location: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/manage_profile', formData);
      console.log(response.data);
      handleOpen(); // Open the modal on successful submission
    } catch (error) {
      console.error('Error adding member:', error);
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
      <h1 className="title">Add Member</h1>
      <div className="editCameraContainer">
        <div className="form-style-6">
          <form onSubmit={handleSubmit}>
            <input type="number" name="id" placeholder="ID" onChange={handleChange} />
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} />
            <Button type="submit" className='EditCameraButton' style={{ marginLeft: '220px' }}>Submit</Button>
          </form>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
                New Member has been successfully added!
                <Link to={"/maintainanceTeam"}><button className="Billingbutton">Members</button></Link>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

