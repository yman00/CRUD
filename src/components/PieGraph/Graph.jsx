import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./Datasets";

export default function PieActiveArc(props) {
  return (
    <PieChart
      series={[
        {
          data: props.data,
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          valueFormatter,
        },
      ]}
      height={260}
      width={250}
    />
  );
}
