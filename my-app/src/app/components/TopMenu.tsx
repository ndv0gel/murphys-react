import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';

export default function TopMenu() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-green">
      <Container>
        <Navbar.Brand href="#">
          <Image 
            src="/murphyslogowhite.png" 
            alt="Murphy's Bar & Grill" 
            className="logo"
            width={120}
            height={40}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#" className="st-patricks">St. Patrick's Day</Nav.Link>
            <Nav.Link href="#">To Go Ordering</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}