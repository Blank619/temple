import React from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.png'
function Footer(){
    return(
        <Navbar collapseOnSelect expand="lg" fixed="bottom"  style={{backgroundColor: "#ff9800", marginTop:'2%'}}>
        <Navbar.Brand href="#home">  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav > 
        <Nav.Link href="#deets"><font color = {"white"} > Temple Timings : 8am to 8pm</font></Nav.Link>
        </Nav > 
        </Navbar.Collapse>
      </Navbar>
     
    );
}

export default Footer;