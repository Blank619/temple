import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import logo from './logo.png'
function Navbarr() {
  return (
    <div className='row' style={{ backgroundColor: 'orange' }}>
      <div
        className='col-sm-12 col-lg-12 col-md-12 col-xs-12'
        style={{ backgroundColor: 'orange' }}
      >
        <Navbar
          collapseOnSelect
          expand='lg'
          fixed=''
          style={{ backgroundColor: 'orange' }}
        >
          <Navbar.Brand href='#home'> </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>
                <font color={'white'}> Home</font>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>
                <font color={'white'}> DONATIONS</font>
              </Nav.Link>
              <Nav.Link href='#deets'>
                <font color={'white'}> TEMPLE PICS </font>
              </Nav.Link>
              <Nav.Link href='#deets'>
                <font color={'white'}> OLD PHOTOS </font>
              </Nav.Link>
              <Nav.Link href='#deets'>
                <font color={'white'}> ABOUT US </font>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Navbarr
