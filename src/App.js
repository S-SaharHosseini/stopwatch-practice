import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Stopwatch from "./Stopwatch";
import TimeList from "./TimeList";

import { timeContext } from "./timeContext";

const App = () => {
  const [theme, setTheme] = useState(false);

  const [timeArr, setTimeArr] = useState([]);

  const handleTheme = () => {
    setTheme(!theme);
    document.body.classList.toggle("dark");
  };

  return (
    <timeContext.Provider value={{ timeArr, setTimeArr }}>
      <Stopwatch theme={theme} handleTheme={handleTheme} />
    </timeContext.Provider>
  );
};
export default App;
