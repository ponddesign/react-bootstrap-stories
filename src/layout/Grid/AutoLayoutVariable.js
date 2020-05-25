import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs lg="2">
        1 of 3
      </Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">
        3 of 3
      </Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">
        3 of 3
      </Col>
    </Row>
  </Container>
);
