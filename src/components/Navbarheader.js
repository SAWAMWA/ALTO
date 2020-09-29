import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar , Nav, NavDropdown} from "react-bootstrap";
//import {Navbar , Nav, NavDropdown} from 'react-bootstrap';

class Navbarheader extends Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="#home"style={{fontSize:'25px', color:"#fff"}} >ALLTO COMPANY LTD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end"  style={{width:"100%"}}>
                <Nav.Link style={{fontSize:'20px', color:"#000"}} href="#home">Home</Nav.Link>
                <Nav.Link style={{fontSize:'20px', color:"#000"}} href="#home">Our Company</Nav.Link>
                <Nav.Link style={{fontSize:'20px', color:"#000"}} href="#home">Members</Nav.Link>
                <NavDropdown title=" Products & services" id="basic-nav-dropdown" style={{fontSize:'18px', color:"#fff"}}>
                  <NavDropdown.Item href="#action/3.1">CCTV camera surveillance </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Door and window sensors </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Networking and Structural cabling </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Biometric finger Installation</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Lightening arrestors </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">General Hardware Material supplies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Civil works</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Site aquisation</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link style={{fontSize:'18px', color:"#000"}} href="#home">Contacts</Nav.Link>
                <Nav.Link style={{fontSize:'18px', color:"#000"}} href="#link">Our partiners</Nav.Link>
              </Nav>
           </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default Navbarheader
