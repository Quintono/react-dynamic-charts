import React, { useState } from "react";
import ChartPane from "./ChartPane";

import "./InputPane.css";

const InputPane = () => {
  const [error, setError] = useState(false);
  const [template, setTemplate] = useState("");
  const templates = ["bar", "pie", "line", "polarArea"];
  const [chartList, setChartList] = useState([]);
  const [dataFields, setDataFields] = useState([
    {
      label: "",
      data: 0,
      color: "#000000",
    },
  ]);

  const addDataFields = () => {
    const fields = [...dataFields];
    fields.push({ label: "", data: 0 });
    setDataFields(fields);
  };

  const removeDataFields = () => {
    const fields = [...dataFields];
    fields.pop();
    setDataFields(fields);
  };

  const clearDataFields = () => {
    setDataFields([
      {
        label: "",
        data: 0,
        color: "#000000",
      },
    ]);
  };

  function handleUpdateFields(index, event) {
    const fields = [...dataFields];
    if (event.target.name === "label") {
      fields[index].label = event.target.value;
    } else if (event.target.name === "data") {
      fields[index].data = event.target.value;
    } else {
      fields[index].color = event.target.value;
    }

    setDataFields(fields);
  }

  function renderError() {
    if (error) {
      return <p style={{ color: "red" }}>Please Select a Template</p>;
    }
    return null;
  }

  function createChart() {
    if (template === "") {
      setError(true);
      return;
    }
    setError(false);
    const config = {
      type: template,
      data: {
        labels: dataFields.map((field) => field.label),
        datasets: [
          {
            label: "",
            data: dataFields.map((field) => field.data),
            backgroundColor: dataFields.map((field) => field.color),
            borderColor: dataFields.map((field) => field.color),
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

    const currentCharts = [...chartList];
    currentCharts.push(config);
    setChartList(currentCharts);
  }

  return (
    <div className="InputPane">
      <div className="InputPane__data">
        {renderError()}
        <label htmlFor="template">
          <select
            id="template"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            onBlur={(e) => setTemplate(e.target.value)}
          >
            <option value="">--SELECT A TEMPLATE--</option>
            {templates.map((temp) => (
              <option key={temp} value={temp}>
                {temp}
              </option>
            ))}
          </select>
        </label>
        <div className="InputPane__data__fields">
          {dataFields.map((field, index) => (
            <div key={`${field}_${index}`}>
              <label htmlFor="label">
                Data Label
                <input
                  type="text"
                  id="label"
                  name="label"
                  value={field.label}
                  placeholder="Enter a data label"
                  onChange={(event) => handleUpdateFields(index, event)}
                />
              </label>
              <label htmlFor="data">
                Data
                <input
                  className="DataInput"
                  type="number"
                  id="data"
                  name="data"
                  value={field.data}
                  onChange={(event) => handleUpdateFields(index, event)}
                />
              </label>
              <label htmlFor="color">
                Color
                <input
                  className="ColorPicker"
                  type="color"
                  id="color"
                  name="color"
                  value={field.color}
                  onChange={(event) => handleUpdateFields(index, event)}
                />
              </label>
            </div>
          ))}
        </div>
        <div clasName="InputPane__data__buttonbar">
          <button className="ClearFieldButton" onClick={clearDataFields}>
            Clear Data Fields
          </button>
          <button className="RemoveFieldButton" onClick={removeDataFields}>
            Remove Data Field
          </button>
          <button className="AddFieldButton" onClick={addDataFields}>
            Add Data Field
          </button>
        </div>
        <div className="Divider"></div>

        <div className="InputPane__data__submit">
          <button className="SubmitButton" onClick={createChart}>
            Creat New Chart
          </button>
        </div>
      </div>
      <div className="InputPane__charts">
        <ChartPane chartList={chartList} />
      </div>
    </div>
  );
};

export default InputPane;
