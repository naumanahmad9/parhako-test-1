import React, { useContext } from "react";
import Image from "../components/Image";
import { GlobalContext } from "../context/GlobalContext";

function Photos() {
  const context = useContext(GlobalContext);

  const photos = context.photos.map((photo) => (
    <Image key={photo.id} pic={photo} />
  ));

  return <div className="photos">{photos}</div>;
}

export default Photos;
