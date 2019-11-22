import React, { Component } from 'react'
import { Navbar, FormControl, Form, Button, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default class Navbar1 extends Component {
    render() {
        return (
            <div>
                
  <Navbar fixed="top" bg="dark" variant="dark" >
    <Link to='/'><Navbar.Brand href="/">IRONBNB</Navbar.Brand></Link>
    <Nav className="mr-sm-2 justify-content-end">
      
    <Link to="/listings/">listing</Link>
      <Nav.Link href="#features">RENT</Nav.Link>
      <Nav.Link href="#pricing">SELL</Nav.Link>
    </Nav>
  </Navbar>

            </div>
        )
    }
}
