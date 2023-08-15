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
      <div className="score">Score: {score}</div>
      <div className="high-score">Highscore: {highScore}</div>
      {urlId.map((id) => (
        <Card
          imgId={id.url}
          key={id.url}
          fn={() => {
            cardClickHandler(id);
          }}
        ></Card>
      ))}
    </>
  );
}

export default App;
