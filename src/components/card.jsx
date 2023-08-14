import { useState, useEffect } from "react";

function Card({ imgId, fn }) {
  const [isClicked, setIsClicked] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    let fetchURL = `https://api.giphy.com/v1/gifs/${imgId}?api_key=jOdYpoKKKafNqOpx5Ea97fQ6QfTmOHpG&rating=g`;
    const fetchImage = async () => {
      const response = await fetch(fetchURL);
      const imageJson = await response.json();
      const image = imageJson.data.images.original.url;
      console.log("API CALL.");
      setImg(image);
    };

    fetchImage();
  }, [imgId]);

  return (
    <>
      <img src={img} onClick={fn} alt="" />
    </>
  );
}

export { Card };
