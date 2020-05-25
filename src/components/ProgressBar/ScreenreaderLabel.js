import React from "react";
import { ProgressBar } from "react-bootstrap";

const now = 60;

export default () => <ProgressBar now={now} label={`${now}%`} srOnly />;
