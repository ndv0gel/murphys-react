import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CenterContent = () => {
  return (
    <Container fluid>
      <Row className="d-flex align-items-center justify-content-center" id="centerText">
        <Col md={8} className="text-center">
          <h1>Now accepting reservations for St Patrick's Day</h1>
          <h1>Please call 808-531-0422 for reservations</h1>
          <h1>St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default CenterContent;
