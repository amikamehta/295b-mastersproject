import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./editUser.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default function EditUser() {
  const { userId } = useParams(); 
  const [userData, setUserData] = useState({
    id: userId, 
    name: '',
    age: '',
    email: '',
    location: '',
    type: '',
    comments: ''
  });
  const [open, setOpen] = React.useState(false);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/users/${userId}`);
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    console.log(userData);
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(userData);
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/users/${userData.id}`, userData);
      setOpen(true);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleClose = () => setOpen(false);
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
      <h1 className="title">Edit User</h1>
      <div className="editCameraContainer">
        <div class="form-style-6">
          <form onSubmit={handleSubmit}>
            <input type="text" name="id" placeholder="User ID" value={userData.id} onChange={handleInputChange} readOnly/>
            <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleInputChange} />
            <input type="number" name="age" placeholder="Age" value={userData.age} onChange={handleInputChange} />
            <input type="text" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
            <input type="text" name="location" placeholder="Location" value={userData.location} onChange={handleInputChange} />
            <select name="type" id="cars" value={userData.subscription} onChange={handleInputChange}>
            <option value="Subscription">Subscription</option>
              <option value="Permanent">Permanent</option>
              <option value="Trial">Trial</option>
              <option value="New">New</option>
            </select>
            <textarea name="comments" placeholder="Additional Comments" value={userData.comments} onChange={handleInputChange}></textarea>
            <Button type="submit" className='EditUserButton' style={{ marginLeft: '220px' }}>Submit</Button>
          </form>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            User Details have been successfully updated!
            <Link to={"/users"}><button className="Billingbutton">User List</button></Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
