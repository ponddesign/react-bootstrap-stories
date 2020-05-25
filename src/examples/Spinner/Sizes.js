import React from "react";
import { Spinner } from "react-bootstrap";

export default () => (
  <>
    <Spinner animation="border" size="sm" />
    <Spinner animation="border" />
    <Spinner animation="grow" size="sm" />
    <Spinner animation="grow" />
  </>
);
