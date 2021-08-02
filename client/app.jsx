import React, { useState, useEffect } from "react";

// Landing page
// TOP elements
import Nav from "./components/top/Nav.jsx";
import ChallengeCreator from "./components/top/ChallengeCreator.jsx";

// BOTTOM elements
// import ChallengeContainer from "./components/bottom/challengeContainer.jsx";
const App = () => {
  return (
    <div className="app">
      <Nav />
      <ChallengeCreator />
    </div>
  );
};

export default App;
