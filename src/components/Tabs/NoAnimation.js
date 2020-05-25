import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import Sonnet from "./Sonnet";

export default () => (
  <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
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