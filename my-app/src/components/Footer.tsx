import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3" id="bottomMenu">
      <Container>
        <Row>
          <Col>
            Lunch
            <hr />
            Monday - Friday: 11:00am - 2:30pm<br />
            Saturday - Sunday: Not open
          </Col>
          <Col>
            Bar
            <hr />
            Monday - Friday: From 11:00am to closing<br />
            Saturday - Sunday: Not open
          </Col>
          <Col>
            Dinner
            <hr />
            Monday - Friday: 5:00pm - 9:00pm<br />
            Saturday - Sunday: Not open
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
