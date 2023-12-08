import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./editSchedule.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function EditUser() {
  const { scheduleId } = useParams();
  const [scheduleData, setScheduleData] = useState({
    camera: '',
    location: '',
    email: '',
    assignee: '',
    severity: '',
    comments: ''
  });
  const [open, setOpen] = useState(false);

  // Fetch schedule data
  useEffect(() => {
    console.log("schedule "+ scheduleId);
    const fetchScheduleData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/schedule/${scheduleId}`);
        setScheduleData(response.data);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchScheduleData();
  }, [scheduleId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScheduleData({ ...scheduleData, [name]: value });
  };

  const handleOpen = () => setOpen(true);
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
      <h1 className="title">Edit Schedule</h1>
      <div className="editCameraContainer">
        
    <div class="form-style-6">
<form>
<input type="text" name="field1" placeholder="Camera #" />
<input type="number" name="field1" placeholder="Location" />
<input type="text" name="field1" placeholder="Email" />
<input type="text" name="field1" placeholder="Assignee" />
  <select name="cars" id="cars">
    <option value="volvo">Severity</option>
    <option value="saab">High</option>
    <option value="opel">Low</option>
    <option value="audi">Moderate</option>
  </select>
<textarea name="field3" placeholder="Additional Comments"></textarea>
<Button onClick={handleOpen} className='EditUserButton' style={{marginLeft:'220px'}}>Submit</Button>
        <Modal
        open={open}
        onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            Schedule has been succesfully updated!
            <Link to={"/schedules"}><button className="Billingbutton">Schedules</button></Link>
          </Typography>
        </Box>
      </Modal>
</form>

</div>

      </div>
     
    </div>
  );
}




