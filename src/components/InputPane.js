import React, { useState } from "react";
import ChartPane from "./ChartPane";

import "./InputPane.css";

const InputPane = () => {
  const [template, setTemplate] = useState("");
  const templates = ["bar", "pie", "line", "polarArea"];
  const [chartConfig, setChartConfig] = useState({});
  const [dataFields, setDataFields] = useState([
    {
      label: "",
      data: 0,
    },
  ]);

  const addDataFields = () => {
    const fields = [...dataFields];
    fields.push({ label: "", data: 0 });
    setDataFields(fields);
  };

  function handleUpdateFields(index, event) {
    const fields = [...dataFields];
    if (event.target.name === "label") {
      fields[index].label = event.target.value;
    } else {
      fields[index].data = event.target.value;
    }

    setDataFields(fields);
  }

  function createChart() {
    const config = {
      type: template,
      data: {
        labels: dataFields.map((field) => field.label),
        datasets: [
          {
            label: "Bar Chart",
            data: dataFields.map((field) => field.data),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };

    setChartConfig(config);
  }

  return (
    <div className="InputPane">
      <div className="container-left">
        <label htmlFor="template">
          Template
          <select
            id="template"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            onBlur={(e) => setTemplate(e.target.value)}
          >
            <option />
            {templates.map((temp) => (
              <option key={temp} value={temp}>
                {temp}
              </option>
            ))}
          </select>
        </label>
        <div>
          {dataFields.map((field, index) => (
            <div key={`${field}_${index}`}>
              <label htmlFor="label">
                Label
                <input
                  type="text"
                  id="label"
                  name="label"
                  value={field.label}
                  placeholder="Label"
                  onChange={(event) => handleUpdateFields(index, event)}
                />
              </label>
              <label htmlFor="data">
                Data
                <input
                  type="number"
                  id="data"
                  name="data"
                  value={field.data}
                  placeholder="Data"
                  onChange={(event) => handleUpdateFields(index, event)}
                />
              </label>
            </div>
          ))}
        </div>
        <div>
          <button onClick={addDataFields}>Add Field</button>
        </div>
      </div>
      <div className="container-right">
        <ChartPane chartConfig={chartConfig} />
      </div>
      <div>
        <button onClick={createChart}>Creat Chart</button>
      </div>
    </div>
  );
};

export default InputPane;
