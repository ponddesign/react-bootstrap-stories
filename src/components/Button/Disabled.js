import React from "react";
import { Button } from "react-bootstrap";

export default () => (
  <>
    <Button variant="primary" size="lg" disabled>
      Primary button
    </Button>{" "}
    <Button variant="secondary" size="lg" disabled>
      Button
    </Button>{" "}
    <Button href="#" variant="secondary" size="lg" disabled>
      Link
    </Button>
  </>
);
