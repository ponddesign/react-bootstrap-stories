import React from "react";
import { Button, Form } from "react-bootstrap";

import HelpBlock from "./HelpBlock";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </Form.Group>
  );
}

export default () => (
  <Form>
    <FieldGroup
      id="Form.ControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="Form.ControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup id="Form.ControlsPassword" label="Password" type="password" />
    <FieldGroup
      id="Form.ControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <Form.Check type="checkbox" checked readOnly>
      Checkbox
    </Form.Check>
    <Form.Check type="radio" checked readOnly>
      Radio
    </Form.Check>

    <Form.Group>
      <Form.Check type="checkbox" inline>
        1
      </Form.Check>{" "}
      <Form.Check type="checkbox" inline>
        2
      </Form.Check>{" "}
      <Form.Check type="checkbox" inline>
        3
      </Form.Check>
    </Form.Group>
    <Form.Group>
      <Form.Check type="radio" name="radioGroup" inline>
        1
      </Form.Check>{" "}
      <Form.Check type="radio" name="radioGroup" inline>
        2
      </Form.Check>{" "}
      <Form.Check type="radio" name="radioGroup" inline>
        3
      </Form.Check>
    </Form.Group>

    <Form.Group controlId="Form.ControlsSelect">
      <Form.Label>Select</Form.Label>
      <Form.Control as="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="Form.ControlsSelectMultiple">
      <Form.Label>Multiple select</Form.Label>
      <Form.Control as="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="Form.ControlsTextarea">
      <Form.Label>Textarea</Form.Label>
      <Form.Control as="textarea" placeholder="textarea" />
    </Form.Group>

    <Form.Group>
      <Form.Label>Static text</Form.Label>
      <Form.Control.Static>email@example.com</Form.Control.Static>
    </Form.Group>

    <Button type="submit">Submit</Button>
  </Form>
);
