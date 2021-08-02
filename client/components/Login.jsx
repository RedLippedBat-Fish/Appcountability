import React, { useEffect, useState } from "react";
import btnNormal from "./Assets/btnNormal.png";
import btnPressed from "./Assets/btnPressed.png";
import NavLogin from "./top/NavLogin.jsx";

// const btnNormal2 = require("./Assets/btnNormal.png");
// const btnPressed2 = require("./Assets/btn.png");

const Login = () => {
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    if (clicked === false) {
      const timer = setTimeout(() => {
        setClicked(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <div className="loginPage">
      <NavLogin />
      <div className="loginBox">
        <h1>Appcountability</h1>
        <input
          type="image"
          onClick={() => setClicked(false)}
          src={clicked ? btnNormal : btnPressed}
        />
      </div>
    </div>
  );
};

export default Login;
