import React from "react";
import { Badge } from "react-bootstrap";

export default () => (
  <div>
    <Badge variant="primary">Primary</Badge>{" "}
    <Badge variant="secondary">Secondary</Badge>{" "}
    <Badge variant="success">Success</Badge>{" "}
    <Badge variant="danger">Danger</Badge>{" "}
    <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>{" "}
    <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
  </div>
);
