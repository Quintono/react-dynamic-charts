import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js";

const ChartType = (props) => {
  const { chartConfig } = props;
  const [chart, setChart] = useState(null);
  const ctx = useRef(null);

  useEffect(() => {
    // if (chart) {
    //   chart.destroy();
    // }
    if (ctx && ctx.current) {
      const newChart = new Chart(ctx.current, chartConfig);
      setChart(newChart);
    }
  }, [ctx]);

  return (
    <>
      <canvas ref={ctx} width="450" height="300" />
    </>
  );
};

export default ChartType;
