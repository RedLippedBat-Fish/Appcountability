import React, { Component } from "react";
import NavUserInfo from "./NavComponents/NavUserInfo.jsx";

class Nav extends Component {
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
