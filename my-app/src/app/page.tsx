"use client";

import { Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';
import './style.css';

const TopMenu = () => (
  <Container id="topMenu" fluid className="py-3">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src="/murphyslogowhite.png" width={200} alt="Murphy's logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">St. Patrick&apos;s Day</Nav.Link>
            <Nav.Link href="#">To Go Ordering</Nav.Link>
            <Nav.Link href="#"><Instagram/></Nav.Link>
            <Nav.Link href="#"><Facebook/></Nav.Link>
            <Nav.Link href="#"><Twitter/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);

const CenterText = () => (
  <Row id="centerText" className="align-items-center justify-content-center">
    <Col xs={8} className="text-center">
      <h1>Now accepting reservations for St Patrick&apos;s Day</h1>
      <h1>Please call 808-531-0422 for reservations</h1>
      <h1>St Patrick&apos;s Day To-Go Orders can be ordered on our website menu.</h1>
    </Col>
  </Row>
);

const BottomMenu = () => (
  <footer id="bottomMenu" className="footer mt-auto py-3">
    <Container>
      <Row>
        <Col>
          Lunch
          <hr/>
          Monday - Friday: 11:00am - 2:30pm<br/>
          Saturday - Sunday: Not open
        </Col>
        <Col>
          Bar
          <hr/>
          Monday - Friday: From 11:00am to closing<br/>
          Saturday - Sunday: Not open
        </Col>
        <Col>
          Dinner
          <hr/>
          Monday - Friday: 5:00pm - 9:00pm<br/>
          Saturday - Sunday: Not open
        </Col>
      </Row>
    </Container>
  </footer>
);

export default function Home() {
  return (
      <main className='d-flex flex-column min-vh-100'>
        <TopMenu />
        <CenterText />
        <BottomMenu />
      </main>
  );
}
