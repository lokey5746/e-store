import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import BasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://assets.stickpng.com/images/585f9333cb11b227491c3581.png"
          alt="amazon"
        />
      </Link>

      {/* search */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* icons */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* checkout */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <BasketIcon />
          <span className="header__optionLineTwo header__optionBasketCount">
            0
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
