import React from 'react';
import { Nav , NavbarBrand} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const NavButtons = () => {
    return (
        <Navbar bg="light" expand="lg">
       
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="Precipitation"> <Nav.Link href="Precipitation">Precipitation</Nav.Link></Link>
           <Link to="Pressure"><Nav.Link href="Pressure">Pressure</Nav.Link></Link>
            <Link to="Temperature"> <Nav.Link href="Temperature">Temperature</Nav.Link></Link>
           <Link to="Clouds"> <Nav.Link href="Clouds">Clouds</Nav.Link></Link>
           <Link to="Wind"> <Nav.Link href="Wind">Wind Speed </Nav.Link></Link>
           
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
};

export default NavButtons;