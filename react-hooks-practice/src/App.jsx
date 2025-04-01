import { useState } from "react";
import "./App.css";

function App() {
  const [onStrike, setOnStrike] = useState("Rohit");
  const [rohitColor, setRohitColor] = useState("green");
  const [shikharColor, setShikharColor] = useState("red");
  const [rohitScore, setRohitScore] = useState(0);
  const [shikharScore, setShikharScore] = useState(0);
  const [overs, setOvers] = useState(0);
  const [rohitBalls, setRohitBalls] = useState(0);
  const [shikharBalls, setShikharBalls] = useState(0);
  const [teamScore, setTeamScore] = useState(0);


  const handleRunClick = (runs) => {
    setTeamScore(teamScore + runs);

    if (onStrike === "Rohit") {
      setRohitScore(rohitScore + runs);
      setRohitBalls(rohitBalls + 1);
    } else {
      setShikharScore(shikharScore + runs);
      setShikharBalls(shikharBalls + 1);
    }
    if (runs % 2 !== 0) {
      setOnStrike(onStrike === "Rohit" ? "Shikhar" : "Rohit");
      setRohitColor(rohitColor === "green" ? "red" : "green");
      setShikharColor(shikharColor === "red" ? "green" : "red");
    }

    setOvers(overs + 1 / 6);
  };



  return (
    <div>
      <h1>Cricket Match Simulator</h1>
      <div className="container">
        <span
          style={{
            fontSize: "25px",
            fontWeight: onStrike === "Rohit" ? "bold" : "normal",
            color: onStrike === "Rohit" ? "green" : "white",
          }}
        >
          Rohit {rohitScore}({rohitBalls})
        </span>
        <span
          style={{
            fontSize: "25px",
          }}
        >
          {" "}
          vs{" "}
        </span>
        <span
          style={{
            fontSize: "25px",
            fontWeight: onStrike === "Shikhar" ? "bold" : "normal",
            color: onStrike === "Shikhar" ? "green" : "white",
          }}
        >
          Shikhar {shikharScore}({shikharBalls})
        </span>
      </div>
      <div>
        <p className="container">Team Total: {rohitScore + shikharScore}</p>
        <p className="container">
          Overs: {Math.floor(overs)}.{Math.round((overs % 1) * 6)}
        </p>
      </div>
      <div>
        {[0, 1, 2, 3, 4, 6].map((runs) => (
          <button key={runs} onClick={() => handleRunClick(runs)}>
            {runs}
          </button>
        ))}
        
      </div>
    </div>
  );
}

export default App;
