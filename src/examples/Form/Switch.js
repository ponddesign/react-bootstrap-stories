import React from "react";
import { Form } from "react-bootstrap";

export default () => (
  <Form>
    <Form.Check // prettier-ignore
      type="switch"
      id="custom-switch"
      label="Check this switch"
    />
    <Form.Check // prettier-ignore
      disabled
      type="switch"
      label="disabled switch"
      id="disabled-custom-switch"
    />
  </Form>
);
