import { useState, useEffect } from "react";

function Card({ imgId }) {
  //effect func will fetch with api code, prop will be specific link.
  // then where this compoonent goes, each Card call will be made with the remaining URL of link
  const [isClicked, setIsClicked] = useState(false);
  const [img, setImg] = useState("");

  // idea - hard mode still images, or vice versa, whatever is harder
  useEffect(() => {
    let fetchURL = `https://api.giphy.com/v1/gifs/${imgId}?api_key=jOdYpoKKKafNqOpx5Ea97fQ6QfTmOHpG&rating=g`;
    const fetchImage = async () => {
      const response = await fetch(fetchURL);
      const imageJson = await response.json();
      const image = imageJson.data.images.original.url;
      setImg(image);
    };

    fetchImage();
  });

  return (
    <>
      <img src={img} alt="" />
      {/* on click, this will call the randomization func
      and will setIsClick true */}
    </>
  );
}

export { Card };
