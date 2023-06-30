import React, { useState } from "react";
import "./styles.css";
import Points from "./components/points";
function App() {
  const [pointsA, setPointsA] = useState("");
  const [pointsB, setPointsB] = useState("");
  return (
    <div className="App">
      <h1>Efficiency</h1>
      <Points name="A" points={pointsA} setPoints={setPointsA} />
      <Points name="B" points={pointsB} setPoints={setPointsB} />
    </div>
  );
}

export default App;
