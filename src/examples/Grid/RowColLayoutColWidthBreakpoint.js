import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Container>
    <Row md={4}>
      <Col>1 of 3</Col>
      <Col xs={6}>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
);
