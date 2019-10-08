import React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.activeStyle = { color: "#F15B2A" };
  }

  render() {
    return (
      <nav>
        <NavLink to="/" activeStyle={this.activeStyle} exact>
          Home
        </NavLink>{" "}
        {"  |  "}
        <NavLink to="/about" activeStyle={this.activeStyle}>
          About
        </NavLink>
        {"  |  "}
        <NavLink to="/products" activeStyle={this.activeStyle}>
          Products
        </NavLink>
      </nav>
    );
  }
}
