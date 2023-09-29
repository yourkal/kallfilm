import React from 'react'
import {Navbar, Container, Nav, NavbarBrand} from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>    
    <Navbar variant='dark'>
      <Container>
        <NavbarBrand href='/'>KALLFILM.ID</NavbarBrand>
        <Nav>
        <Nav.Link href="#trending">Trending</Nav.Link>
        <Nav.Link href="#hero">Hero</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar
