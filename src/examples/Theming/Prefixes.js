import React from "react";
import { ThemeProvider, Button } from "react-bootstrap";

export default () => (
  <>
    {/* Hint: inspect the markup to see how the classes differ */}
    <ThemeProvider prefixes={{ btn: "my-btn" }}>
      <Button variant="primary">My Button</Button>
    </ThemeProvider>{" "}
    <Button bsPrefix="super-btn" variant="primary">
      Super button
    </Button>
  </>
);
