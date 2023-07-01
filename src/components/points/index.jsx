import React, { memo } from "react";

const Points = memo(({ name, state, setPoints }) => {
  const point = state[name];
  console.log(name + point);

  return (
    <div>
      <button onClick={() => setPoints(point + "+")}>Add "+"</button>
      <h2>{`${name}${point}`}</h2>
    </div>
  );
});

export default Points;
