import React from "react";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from '@storybook/react/demo';

import { Alert } from "react-bootstrap";

import * as examples from "../examples/Alert/AdditionalContent";

console.log("examples", examples);

export default {
  title: "Components/Alert",
  component: Alert,
};

export const alert = () => <Alert variant="danger">Test alert</Alert>;
