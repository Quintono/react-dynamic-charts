import React from "react";
import ChartType from "./ChartType";

import "./ChartPane.css";

const ChartPane = (props) => {
  const { chartConfig } = props;

  return <ChartType chartConfig={chartConfig} />;
};

export default ChartPane;
