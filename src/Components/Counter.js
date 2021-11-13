import React from "react";
import withCounter from "../HOC/withCounter";

const Counter = ({ counter, increment, hello }) => {
  return (
    <div>
      <h1>{hello}</h1>
      <button onClick={increment}>Increment {counter}</button>
    </div>
  );
};

export default withCounter(Counter, { count: 5 });
