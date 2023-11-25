import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button} from 'react-bootstrap';
import "./billing.css";
import { ShopContext } from '../../context/shopContext';
import {camerarows} from "../../cameraCatlogDummyData.js"
import { CartItem } from '../cartItemBillingPage/CartItemBillingPage.jsx';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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

export default function Billing() {
  const { cartItems,getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount()
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='billingPage'>
      <Navbar expand="sm" className='navbarMain'>
        <Navbar.Brand className="navbar">Billing Page</Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
        <Link to="/cameraCatlog">
            <Button className="button">Camera Catlog</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      Your cart items
      <div className="products">
        {camerarows.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      <br/><br/>
      <div className='checkout'>
        <p className='subtotal'>Subtotal : ${totalAmount}</p>
        <Link to={"/cameraCatlog"}><button className="Billingbutton">Continue Shopping</button></Link>
        {/* <Button className='Billingbutton' style={{marginLeft:'100px'}} onClick="toggleUp()">Checkout</Button> */}
        <Button onClick={handleOpen} className='Billingbutton' style={{marginLeft:'100px'}}>Checkout</Button>
        <Modal
        open={open}
        onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            Thank-you for placing your order,<br/>
            Subtotal - {totalAmount}<br/>
            <Link to={"/"}><button className="Billingbutton">Home</button></Link>
          </Typography>
        </Box>
      </Modal>

      </div>
    </div>
  );
}
