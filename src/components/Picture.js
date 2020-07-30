import React from "react";

function Picture({ pic }) {
  return (
    <div className="pic-container">
      <img src={pic.url} className="pic-grid" />
    </div>
  );
}

export default Picture;
