import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js";

const BarChart = (props) => {
  const { chartConfig } = props;
  const [chart, setChart] = useState(null);
  const cdx = useRef(null);

  useEffect(() => {
    if (cdx && cdx.current) {
      const newChart = new Chart(cdx.current, chartConfig);
      setChart(newChart);
    }
  }, [cdx, chartConfig]);

  return (
    <>
      <canvas ref={cdx} />
    </>
  );
};

export default BarChart;
