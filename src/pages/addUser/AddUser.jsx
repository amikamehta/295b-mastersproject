import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./addUser.css";

export default function AddUser() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    email: '',
    location: '',
    type: ''
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userData);
      const response = await axios.post('http://localhost:4000/users', userData);
      console.log(response.data);
      setOpen(true);
    } catch (error) {
      console.error('Error adding user:', error);
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
      <h1 className="title">Add User</h1>
      <div className="editCameraContainer">
        <div className="form-style-6">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
            <input type="text" name="age" placeholder="Age" onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
            <input type="text" name="location" placeholder="Location" onChange={handleInputChange} />
            <select name="type" onChange={handleInputChange}>
            <option value="Subscription">Subscription</option>
              <option value="Permanent">Permanent</option>
              <option value="Trial">Trial</option>
              <option value="New">New</option>
            </select>
            <Button type="submit" className='EditCameraButton' style={{ marginLeft: '220px' }}>Submit</Button>
          </form>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            New User has been successfully added!
            <Link to={"/users"}><button className="Billingbutton">User Page</button></Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
