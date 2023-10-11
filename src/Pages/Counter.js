import React, { useState } from "react";
import Layout from "../commponents/Layout";
var timer = undefined;
const Counter = () => {
  const [counter, setcounter] = useState(0);
  const [started, setstarted] = useState(false);

  let start = () => {
    timer = setInterval(() => {
      setcounter((pre) => pre + 1);
      setstarted(true);
    }, 1000);
  };
  let stop = () => {
    clearInterval(timer);
    setstarted(false);
  };
  let reset = () => {
    setcounter(0);
    clearInterval(timer);
    setstarted(false);
  };
  return (
    <Layout>
      <div className="text-center text-white mt-5">
        <div className="h3">Timer </div>
        <h1>{counter}</h1>
        <button
          disabled={started}
          onClick={start}
          className="btn btn-success m-2"
        >
          Start
        </button>
        <button onClick={stop} className="btn btn-danger m-2">
          Stop
        </button>
        <button onClick={reset} className="btn btn-primary m-2">
          Reset
        </button>
      </div>
    </Layout>
  );
};

export default Counter;
