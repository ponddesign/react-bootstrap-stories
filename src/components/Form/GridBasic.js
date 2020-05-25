import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default () => (
  <Form>
    <Row>
      <Col>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Control placeholder="Last name" />
      </Col>
    </Row>
  </Form>
);
