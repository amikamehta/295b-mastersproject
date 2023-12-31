import React, { useContext } from 'react';
import "./editMaintainanceTeam.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Navbar, Button} from 'react-bootstrap';

export default function EditUser() {
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
      <h1 className="title">Edit Team Details</h1>
      <div className="editCameraContainer">
        
    <div class="form-style-6">
<form>
<input type="text" name="field1" placeholder="Name" />
<input type="number" name="field1" placeholder="Email" />
<input type="number" name="field1" placeholder="Age" />
<input type="text" name="field1" placeholder="Location" />
<textarea name="field3" placeholder="Additional Comments"></textarea>
<Button onClick={handleOpen} className='EditUserButton' style={{marginLeft:'220px'}}>Submit</Button>
        <Modal
        open={open}
        onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            Maintainance Team has been succesfully updated!
            <Link to={"/maintainanceTeam"}><button className="Billingbutton">Members</button></Link>
          </Typography>
        </Box>
      </Modal>
</form>

</div>

      </div>
     
    </div>
  );
}




