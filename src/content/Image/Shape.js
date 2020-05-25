import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default () => (
  <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" rounded />
      </Col>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" roundedCircle />
      </Col>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" thumbnail />
      </Col>
    </Row>
  </Container>
);
