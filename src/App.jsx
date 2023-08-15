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
