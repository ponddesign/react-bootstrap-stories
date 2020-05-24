// import React from "react";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from '@storybook/react/demo';

import { Alert } from "react-bootstrap";

import AdditionalContent from "./AdditionalContent";
import Basic from "./Basic";
import Dismissible from "./Dismissible";
import DismissibleControlled from "./DismissibleControlled";
import Link from "./Link";

export default {
  title: "Components/Alert",
  component: Alert,
};

export const additionalContent = AdditionalContent;
export const basic = Basic;
export const dismissible = Dismissible;
export const dismissibleControlled = DismissibleControlled;
export const link = Link;
