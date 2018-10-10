/**
 * created by Samson Iyanda on 08-10-2018
 */
//

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ toggleNavBar }) => {
  const handleToggle = () => {
    // O P E N OR C L O S E
    toggleNavBar();
  }
  return (
    <header className="pos-fixed w-100">
      {/* N A V B A R */}
      <div className="container">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <Link className="navbar-item navbar-logo" to="/">
              TEXTPEDIA
            </Link>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
              onClick = { handleToggle }
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
              <NavLink
                className="navbar-item"
                to="/"
                exact
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/register"
                activeClassName="active"
              >
                Sign Up
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/howitworks"
                activeClassName="active"
              >
                How It Works
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
