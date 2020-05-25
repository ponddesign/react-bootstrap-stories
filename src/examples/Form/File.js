import React from "react";
import { Form } from "react-bootstrap";

export default () => (
  <Form>
    <Form.File // prettier-ignore
      id="custom-file"
      label="Custom file input"
      custom
    />
  </Form>
);
