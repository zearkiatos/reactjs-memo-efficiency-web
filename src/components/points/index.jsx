import React, { memo } from "react";

const Points = memo(({ name, points, setPoints }) => {
  console.log(name + points);

  return (
    <div>
      <button onClick={() => setPoints(points + "+")}>Add "+"</button>
      <h2>{`${name}${points}`}</h2>
    </div>
  );
});

export default Points;
