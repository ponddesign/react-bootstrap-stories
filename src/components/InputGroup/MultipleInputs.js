import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default () => (
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>First and last name</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl />
    <FormControl />
  </InputGroup>
);
