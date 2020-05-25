import React from "react";
import { Form } from "react-bootstrap";

export default () => (
  <Form>
    <Form.File // prettier-ignore
      id="custom-file-translate-scss"
      label="Custom file input"
      lang="en"
      custom
    />
  </Form>
);
