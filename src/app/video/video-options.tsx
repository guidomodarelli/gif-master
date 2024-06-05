import { SegmentedLabeledOption } from "antd/es/segmented";

export const options: SegmentedLabeledOption<string>[] = [
  // TODO: add images/icons
  {
    value: "/video/cut",
    label: "Cut",
  },
  {
    value: "/rotate",
    label: "Rotate",
  },
  {
    value: "/resize",
    label: "Resize",
  },
  {
    value: "/reverse",
    label: "Reverse",
  },
  {
    value: "/crop",
    label: "Crop",
  },
  {
    value: "/speed",
    label: "Speed",
  },
  {
    value: "/mute",
    label: "Mute",
  },
  {
    value: "/merge",
    label: "Merge",
  },
  {
    value: "/subtitles",
    label: "Subtitles",
  },
];