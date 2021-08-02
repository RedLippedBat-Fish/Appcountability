import React from "react";
import NavUserInfo from "./NavComponents/NavUserInfo.jsx";

const Nav = () => {
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
};

export default Nav;
