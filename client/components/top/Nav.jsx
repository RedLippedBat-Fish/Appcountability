import React, { Component } from "react";
import { render } from "sass";
import NavUserInfo from "./NavComponents/NavUserInfo.jsx";

class Nav extends component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navbar">
        <div id="navLeft">
          <a href="#">where icon should be</a>
          <a href="#">Appcountability</a>
        </div>
        <div id="navRight">
          <NavUserInfo />
        </div>
      </div>
    );
  }
}

export default Nav;
