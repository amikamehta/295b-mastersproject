import "./AddAlert.css"
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Navbar, Button} from 'react-bootstrap';
export default function AddCamera() {

  const [open, setOpen] = React.useState(false);
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
      <h1 className="title">Add Alerts</h1>
      <div className="editCameraContainer">
        
    <div class="form-style-6">
<form>
<input type="text" name="field1" placeholder="Type" />
<input type="text" name="field1" placeholder="Location" />
<input type="text" name="field1" placeholder="Severity" />
<select name="cars" id="cars">
    <option value="volvo">Status</option>
    <option value="saab">Resolved</option>
    <option value="opel">Pending</option>
  </select>
<Button onClick={handleOpen} className='EditCameraButton' style={{marginLeft:'220px'}}>Submit</Button>
        <Modal
        open={open}
        onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            New Alert has been succesfully added!
            <Link to={"/alerts"}><button className="Billingbutton">Alerts Page</button></Link>
          </Typography>
        </Box>
      </Modal>
</form>
</div>
      </div>
    </div>
  );
}

