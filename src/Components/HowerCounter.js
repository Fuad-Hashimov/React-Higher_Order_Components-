import React from "react";
import withCounter from "../HOC/withCounter";

function HowerCounter({ increment, counter }) {
  return (
    <div>
      <h1 onMouseOver={increment}>Hower Me : {counter}</h1>
    </div>
  );
}
export default withCounter(HowerCounter);
