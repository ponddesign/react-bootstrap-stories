import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Container>
    <Row xs={2} md={4} lg={6}>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row xs={1} md={2}>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
);
