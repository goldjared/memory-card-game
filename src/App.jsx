import { useState } from "react";
import "./App.css";
import { Card } from "./components/card";
import { randomCardOrder } from "./logic";

const urlIds = randomCardOrder([
  "YwAgyCddum3K0",
  "QuxqWk7m9ffxyfoa0a",
  "ighdr7xNaVwwQtUkP0",
  "h8OX1iXpgYoH1wIkHE",
  "5zI213WKIL2uI",
  "3pQA6Uba4Argk",
  "jpbAaUG7cjkZy",
  "qTD9EXZRgI1y0",
  "XcL6a7YHm4sWA",
  "kBrY0BlY4C4jhBeubb",
]);

function App() {
  const [urlId, setUrlIds] = useState(urlIds);

  return (
    <>
      {urlId.map((id) => (
        <Card
          imgId={id}
          key={id}
          fn={() => {
            setUrlIds(randomCardOrder(urlId));
          }}
        ></Card>
      ))}
    </>
  );
}

export default App;
