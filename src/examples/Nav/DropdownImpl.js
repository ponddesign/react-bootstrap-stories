import React from "react";
import { NavItem, NavLink, Dropdown } from "react-bootstrap";

export default () => (
  <Dropdown as={NavItem}>
    <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Hello there!</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
