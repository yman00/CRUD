import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./Datasets";

const chartSetting = {
  xAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  height: 400,
};

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        {
          dataKey: "seoul",
          label: "SALES",
          valueFormatter,
          color: "#1976d2",
        },
      ]}
      layout="horizontal"
      {...chartSetting}
      width={800}
      height={600}
      borderRadius={5}
    />
  );
}
