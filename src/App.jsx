import React, { useState, useMemo } from "react";
import "./styles.css";
import Points from "./components/points";
function App() {
  const [pointsA, setPointsA] = useState("");
  const [pointsB, setPointsB] = useState("");
  const state = useMemo(
    () => ({
      A: pointsA,
      B: pointsB,
    }),
    [pointsA, pointsB]
  );
  return (
    <div className="App">
      <h1>Efficiency</h1>
      <Points name="A" state={state} setPoints={setPointsA} />
      <Points name="B" state={state} setPoints={setPointsB} />
    </div>
  );
}

export default App;
