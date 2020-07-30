import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function Header() {
  const { cartHasItems } = useContext(GlobalContext);

  function cartIcon() {
    if (cartHasItems()) {
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
    } else {
      return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
    }
  }
  return (
    <header>
      <nav>
        <ul class="navbar">
          <li>
            <Link to="/">Pic Some</Link>
          </li>
          <li>
            <Link to="/cart">{cartIcon()}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
