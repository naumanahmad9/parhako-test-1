import React, { useContext } from "react";
import Picture from "../components/Picture";
import { GlobalContext } from "../context/GlobalContext";

function Photos() {
  const context = useContext(GlobalContext);

  const photos = context.photos.map((photo) => (
    <Picture key={photo.id} pic={photo} />
  ));

  return <div className="photos">{photos}</div>;
}

export default Photos;
