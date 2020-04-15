import React from "react";
import InputPane from "./components/InputPane";
import ChartPane from "./components/ChartPane";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Dynanmic Charts</h1>
      </header>
      <InputPane />
    </div>
  );
}

export default App;
