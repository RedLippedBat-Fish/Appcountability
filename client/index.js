import React from "react";
import { Router } from 'react-router';
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import { createBrowserHistory } from 'history';


import { Switch, Route } from "react-router-dom";

import styles from "./scss/stylesheets.scss";

// https://dev.to/danhjoo7/using-a-switch-component-in-react-router-d2k#:~:text=The%20component%20will,not%20be%20able%20to%20handle.

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/login" component={Login} />
    <Route path="/" component={App} />
  </Router>,
  // <App />

  // <Login />,
  document.getElementById("root")
);
