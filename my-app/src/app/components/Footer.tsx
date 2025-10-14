import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="hours-section bg-green text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <h3>Lunch</h3>
            <p className="mb-1">Monday - Friday: 11:00am - 2:30pm</p>
            <p>Saturday - Sunday: Not open</p>
          </Col>
          <Col md={4} className="text-center">
            <h3>Bar</h3>
            <p className="mb-1">Monday - Friday: From 11:00am to closing</p>
            <p>Saturday - Sunday: Not open</p>
          </Col>
          <Col md={4} className="text-center">
            <h3>Dinner</h3>
            <p className="mb-1">Monday - Friday: 5:00pm - 9:00pm</p>
            <p>Saturday - Sunday: Not open</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}