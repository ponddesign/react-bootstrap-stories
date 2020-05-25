import React from "react";
import { Spinner } from "react-bootstrap";

import Basic from "./Basic";
import Border from "./Border";
import Buttons from "./Buttons";
import Grow from "./Grow";
import Sizes from "./Sizes";
import Variants from "./Variants";

export default () => (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export const basic = Basic;
export const border = Border;
export const buttons = Buttons;
export const grow = Grow;
export const sizes = Sizes;
export const variants = Variants;
