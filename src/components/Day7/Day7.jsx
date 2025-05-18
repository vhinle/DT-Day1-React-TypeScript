import React, { useEffect, useState } from "react";

export const CounterWithEffect = () => {
  const [count, setCount] = useState(0);
  const [anotherState, setAnotherState] = useState(0);
  useEffect(() => {
    console.log("This runs on render");
    return () => {
      console.log("This runs on cleanup/unmount");
    };
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Update Count</button>

      <button onClick={() => setAnotherState((prev) => prev + 1)}>
        Update Count
      </button>
      <div>Count: {count}</div>
      <div>
        Update another state that rerenders the entire component {anotherState}
      </div>
    </div>
  );
};
