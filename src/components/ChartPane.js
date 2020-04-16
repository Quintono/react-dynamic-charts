import React from "react";
import ChartType from "./ChartType";

import "./ChartPane.css";

const ChartPane = (props) => {
  const { chartList } = props;

  return (
    <div className="ChartPane">
      {chartList.map((chart, index) => (
        <div key={index} className="ChartPane__item">
          <ChartType chartConfig={chart} />
        </div>
      ))}
    </div>
  );
};

export default ChartPane;
