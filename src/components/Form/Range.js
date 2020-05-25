import React from "react";
import { Form } from "react-bootstrap";

export default () => (
  <Form>
    <Form.Group controlId="formBasicRange">
      <Form.Label>Range</Form.Label>
      <Form.Control type="range" />
    </Form.Group>
  </Form>
);
