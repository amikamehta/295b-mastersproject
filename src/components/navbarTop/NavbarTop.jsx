import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button} from 'react-bootstrap';
import './navbarTop.css';

export default function NavbarTop() {
  return (
    <>
      <Navbar expand="sm" className='navbarMain'>
        <Navbar.Brand className="navbar">Camera Catalog</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
        <Link to="/billing">
            <Button className="button">Billing Page</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>

      
    </>
  );
}
