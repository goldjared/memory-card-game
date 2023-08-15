import { useState } from "react";
import "./App.css";
import { Card } from "./components/card";
import { randomCardOrder } from "./logic";

const urlIds = randomCardOrder([
  { url: "YwAgyCddum3K0", isClicked: false },
  { url: "QuxqWk7m9ffxyfoa0a", isClicked: false },
  { url: "ighdr7xNaVwwQtUkP0", isClicked: false },
  { url: "XcL6a7YHm4sWA", isClicked: false },
  { url: "kBrY0BlY4C4jhBeubb", isClicked: false },
  { url: "qTD9EXZRgI1y0", isClicked: false },
  { url: "jpbAaUG7cjkZy", isClicked: false },
  { url: "3pQA6Uba4Argk", isClicked: false },
  { url: "5zI213WKIL2uI", isClicked: false },
  { url: "h8OX1iXpgYoH1wIkHE", isClicked: false },
]);

function App() {
  const [urlId, setUrlIds] = useState(urlIds);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function cardClickHandler(data) {
    if (!data.isClicked) {
      setScore(score + 1);
      data.isClicked = true;
    } else {
      if (score > highScore) setHighScore(score);
      setScore(0);
      urlId.forEach((obj) => {
        obj.isClicked = false;
      });
    }
    setUrlIds(randomCardOrder(urlId));
  }

  return (
    <>
      <header>
        <div className="left-side-head">
          <p className="title">Skele Card Game!</p>
          <p className="desc">Do not click the same card more than one time.</p>
        </div>
        <div className="right-side-head">
          <p className="score">Score: {score}</p>
          <p className="high-score">Highscore: {highScore}</p>
        </div>
      </header>
      <div className="card-container">
        {urlId.map((id) => (
          <Card
            imgId={id.url}
            key={id.url}
            fn={() => {
              cardClickHandler(id);
            }}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;
