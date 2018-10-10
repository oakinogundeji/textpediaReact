/**
 * created by Samson Iyanda on 10-10-2018
 */
//

import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => (
  <aside className="sidebar">
    <ul className="menus">
      <NavLink className="navbar-item" to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink className="navbar-item" to="/register" activeClassName="active">
        Sign Up
      </NavLink>
      <NavLink className="navbar-item" to="/howitworks" activeClassName="active">
        How It Works
      </NavLink>
    </ul>
  </aside>
);

export default SideBar;