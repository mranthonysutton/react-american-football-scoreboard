import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDowns] = useState(3);
  const [quarter, setQuarter] = useState(4);
  const [yardsToGo, setYardsQuarter] = useState(7);
  const [ballOn, setBallOn] = useState(21);

  return (
    <>
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{down}</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">{yardsToGo}</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">{ballOn}</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarter}</div>
        </div>
      </div>

      <section className="scoreboardButtons">
        <button onClick={() => setDowns(down + 1)}>New Down</button>
        <button onClick={() => setDowns(0)}>Reset Down</button>
        <button onClick={() => setQuarter(quarter + 1)}>New Quarter</button>
        <button onClick={() => setQuarter(0)}>Reset Quarter</button>
        <button
          onClick={() => {
            setDowns(0);
            setQuarter(0);
            setYardsQuarter(0);
            setBallOn(50);
          }}
        >
          End Game
        </button>
      </section>
    </>
  );
};

export default BottomRow;
