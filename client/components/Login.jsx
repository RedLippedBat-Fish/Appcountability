import React, { Component, useEffect, useState } from "react";
import btnNormal from "./Assets/btnNormal.png";
import btnPressed from "./Assets/btnPressed.png";
import NavLogin from "./top/NavLogin.jsx";
import { Link } from 'react-router-dom';


import axios from 'axios';

// const btnNormal2 = require("./Assets/btnNormal.png");
// const btnPressed2 = require("./Assets/btn.png");

// const Login = () => {
//   const [clicked, setClicked] = useState(true);

//   useEffect(() => {
//     if (clicked === false) {
//       const timer = setTimeout(() => {
//         setClicked(true);
//       }, 100);
//       return () => clearTimeout(timer);
//     }
//   }, [clicked]);

class Login extends Component {
  constructor(props) {
    super(props);
  }


  handleClick = async () => {
    try {
      const user = await axios.get('http://localhost:3000/api/auth/google/', { 'headers': {"Access-Control-Allow-Origin": "*" }});

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
    <div className="loginPage">
      <NavLogin />
      <div className="loginBox">
        <h1>Appcountability</h1>
        <Link to="/api/auth/google" className="btn btn-primary">Sign in with Google</Link>
      </div>
    </div>
  );
  }
  
};

export default Login;

{/* <input
          type="image"
          onClick={this.handleClick}
          // src={clicked ? btnNormal : btnPressed}
        /> */}