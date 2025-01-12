import { ReactElement } from "react";

import { Link, NavLink } from "react-router";

import "./appHeader.scss";

const AppHeader = (): ReactElement => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/products" className="header__title">
          FRUIT CARDS
        </Link>
        <nav className="header__nav">
          <NavLink to="/products" className="header__link">
            Main
          </NavLink>
          <NavLink to="/create-product" className="header__link">
            Create Card
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
