import React from "react";
import { Form } from "react-bootstrap";

export default () => (
  <Form>
    <Form.File // prettier-ignore
      id="custom-file-translate-html"
      label="Voeg je document toe"
      data-browse="Bestand kiezen"
      custom
    />
  </Form>
);
