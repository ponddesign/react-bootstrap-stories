import React from "react";
import { Badge, Button } from "react-bootstrap";

export default () => (
  <Button variant="primary">
    Profile <Badge variant="light">9</Badge>
    <span className="sr-only">unread messages</span>
  </Button>
);
