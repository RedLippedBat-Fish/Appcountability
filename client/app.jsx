import React, { useState, useEffect } from "react";

// TOP elements
import ChallengeCreator from "./components/top/ChallengeCreator.jsx";

import Nav from "./components/top/Nav.jsx";

// BOTTOM elements
import ChallengeContainer from "./components/bottom/challengeContainer.jsx";
const App = () => {
  // dummy
  const [user, setUser] = useState([{ user: "me" }]);

  // state methods
  // usestate = manipulate state (only overwrites)
  // useEffet = componentdidMount or componentdidUpdatef
  // useEffect(() => {
  //    // Update the document title using the browser API
  //    document.title = `You clicked ${count} times`;
  //  });

  return (
    <div className="app">
      <Nav />
      <ChallengeCreator />
      {/* <ChallengeContainer /> */}
    </div>
  );
};

export default App;
