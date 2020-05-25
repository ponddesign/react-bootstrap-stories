import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export default () => (
  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
    <span className="d-inline-block">
      <Button disabled style={{ pointerEvents: "none" }}>
        Disabled button
      </Button>
    </span>
  </OverlayTrigger>
);
