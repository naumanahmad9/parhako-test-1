import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";

function Image({ pic }) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addToCart, isInCart, removeFromCart } = useContext(
    GlobalContext
  );

  function heartIcon() {
    if (pic.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(pic.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(pic.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    if (isInCart(pic)) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(pic)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(pic)}
        ></i>
      );
    }
  }

  return (
    <div className="pic-container" ref={ref}>
      {heartIcon()}
      {cartIcon()}
      <img src={pic.url} className="pic-grid" />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Image;
