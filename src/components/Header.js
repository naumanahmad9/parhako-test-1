import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul class="navbar">
          <li>
            <Link to="/">Pic Some</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="ri-shopping-cart-line ri-2x"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
