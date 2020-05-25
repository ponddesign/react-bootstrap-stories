import React from "react";
import { Tabs, Tab, Sonnet } from "react-bootstrap";

export default () => (
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab eventKey="home" title="Home">
      <Sonnet />
    </Tab>
    <Tab eventKey="profile" title="Profile">
      <Sonnet />
    </Tab>
    <Tab eventKey="contact" title="Contact" disabled>
      <Sonnet />
    </Tab>
  </Tabs>
);
