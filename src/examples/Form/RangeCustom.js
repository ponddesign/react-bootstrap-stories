import React from "react";
import { Form } from "react-bootstrap";

export default () => (
  <Form>
    <Form.Group controlId="formBasicRangeCustom">
      <Form.Label>Range</Form.Label>
      <Form.Control type="range" custom />
    </Form.Group>
  </Form>
);
