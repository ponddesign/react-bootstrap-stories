import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import Sonnet from "./Sonnet";

export default () => {
  const [key, setKey] = React.useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
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
};
