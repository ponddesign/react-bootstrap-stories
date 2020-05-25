// import React from "react";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from '@storybook/react/demo';

import { Accordion } from "react-bootstrap";

import AllCollapse from "./AllCollapse";
import Basic from "./Basic";
import CustomToggle from "./CustomToggle";
import EntireHeaderClickable from "./EntireHeaderClickable";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

export const allCollapse = AllCollapse;
export const basic = Basic;
export const customToggle = CustomToggle;
export const entireHeaderClickable = EntireHeaderClickable;
