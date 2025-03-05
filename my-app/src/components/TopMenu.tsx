import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => {
  return (
    <div className="px-0 justify-content-center pb-2" id="topMenu">
      <Navbar>
        <Container>
          <Nav className="justify-content-start">
            <Navbar.Brand href="#">
              <img src="/murphyslogowhite.png" width="200px" alt="Murphy's Logo" />
            </Navbar.Brand>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>St. Patrick's Day</Nav.Link>
            <Nav.Link>To Go Ordering</Nav.Link>
            <Nav.Link><Instagram /></Nav.Link>
            <Nav.Link><Facebook /></Nav.Link>
            <Nav.Link><Twitter /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenu;
