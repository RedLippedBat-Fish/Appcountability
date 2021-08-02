import React, { useEffect, useState } from "react";
import btnNormal from "./Assets/btnNormal.png";
import btnPressed from "./Assets/btnPressed.png";
import Nav from "./Login.jsx";

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
      <h1>Appcountability</h1>
      <input
        type="image"
        onClick={() => setClicked(false)}
        src={clicked ? btnNormal : btnPressed}
      />
    </div>
  );
};

export default Login;
