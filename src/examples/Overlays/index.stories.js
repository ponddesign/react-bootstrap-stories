import { Overlay } from "react-bootstrap";

import Disabled from "./Disabled";
import Standard from "./Overlay";
import OverlayTrigger from "./OverlayTrigger";
import PopoverBasic from "./PopoverBasic";
import PopoverContained from "./PopoverContained";
import PopoverPositioned from "./PopoverPositioned";
import PopoverPositionedScrolling from "./PopoverPositionedScrolling";
import PopoverTriggerBehaviors from "./PopoverTriggerBehaviors";
import ScheduleUpdate from "./ScheduleUpdate";
import TooltipInCopy from "./TooltipInCopy";
import TooltipOverlay from "./TooltipOverlay";
import TooltipPositioned from "./TooltipPositioned";

export default {
  title: "Components/Overlay",
  component: Overlay,
};

export const disabled = Disabled;
export const overlay = Standard;
export const overlayTrigger = OverlayTrigger;
export const popoverBasic = PopoverBasic;
export const popoverContained = PopoverContained;
export const popoverPositioned = PopoverPositioned;
export const popoverPositionedScrolling = PopoverPositionedScrolling;
export const popoverTriggerBehaviors = PopoverTriggerBehaviors;
export const scheduleUpdate = ScheduleUpdate;
export const tooltipInCopy = TooltipInCopy;
export const tooltipOverlay = TooltipOverlay;
export const tooltipPositioned = TooltipPositioned;
