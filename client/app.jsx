import React, { useState, useEffect } from "react";
// import components from clinet/components

// declare function instead of class "" extend whatever

// @https://reactjs.org/docs/hooks-state.html ex;

// function Example() {
//    const [count, setCount] = useState(0);
// 'count' is state, setCount is a function to update 'count' variable

// ## rules
// -  we can use multiple State or Effect Hooks in a single component:
//

function App() {
  const [test, setTest] = useState(0);
  // state methods
  // usestate = manipulate state (only overwrites)
  // useEffet = componentdidMount or componentdidUpdate
  // useEffect(() => {
  //    // Update the document title using the browser API
  //    document.title = `You clicked ${count} times`;
  //  });

  return (
    <div>
      <p>hi</p>
    </div>
  );
}

export default App;
