import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Item from "./item";
import { timeContext } from "./timeContext";

const TimeList = () => {
  const {timeArr} = useContext(timeContext);
  return (
    <div className="lap-section">
      {timeArr.map((c , index) => (
        <Item c={c} key={index} index={index} />
      ))}
    </div>
  );
};
export default TimeList;
