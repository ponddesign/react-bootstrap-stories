import React from "react";
import { Tooltip, Overlay, Button } from "react-bootstrap";

export default function Example() {
  const [show, setShow] = React.useState(false);
  const target = React.useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
