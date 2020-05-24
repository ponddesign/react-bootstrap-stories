import React from "react";
import { Badge } from "react-bootstrap";

export default () => (
  <div>
    <Badge pill variant="primary">
      Primary
    </Badge>{" "}
    <Badge pill variant="secondary">
      Secondary
    </Badge>{" "}
    <Badge pill variant="success">
      Success
    </Badge>{" "}
    <Badge pill variant="danger">
      Danger
    </Badge>{" "}
    <Badge pill variant="warning">
      Warning
    </Badge>{" "}
    <Badge pill variant="info">
      Info
    </Badge>{" "}
    <Badge pill variant="light">
      Light
    </Badge>{" "}
    <Badge pill variant="dark">
      Dark
    </Badge>
  </div>
);
