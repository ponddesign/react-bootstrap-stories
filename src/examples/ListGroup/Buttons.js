import React from "react";
import { ListGroup } from "react-bootstrap";

function alertClicked() {
  alert("You clicked the third ListGroupItem");
}

export default () => (
  <ListGroup>
    <ListGroup.Item action>Link 1</ListGroup.Item>
    <ListGroup.Item action>Link 2</ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked}>
      Trigger an alert
    </ListGroup.Item>
  </ListGroup>
);
