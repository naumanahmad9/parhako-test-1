import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(GlobalContext);

  const trashBinClassName = hovered
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={trashBinClassName}
        onClick={() => removeFromCart(item)}
        ref={ref}
      ></i>
      <img src={item.url} width="150px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
