import React, { useState } from "react";

const withCounter = (OrginalComponent, options = {}) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);

    const { count = 1 } = options;

    const increment = () => {
      setCounter(counter + count);
    };
    return (
      <OrginalComponent increment={increment} counter={counter} {...props} />
    );
  }
  return NewComponent;
};

export default withCounter;
