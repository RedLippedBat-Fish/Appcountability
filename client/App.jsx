import React, { Component } from "react";

// TOP elements
import ChallengeCreator from "./components/top/ChallengeCreator.jsx";
import Nav from "./components/top/Nav.jsx";

// BOTTOM elements
// import ChallengeContainer from "./components/bottom/challengeContainer.jsx";
// import { render } from "sass";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: "",
      wagerAMount: 0,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //add async
  handleSubmit = (event) => {
    // alert('A name was submitted: ' + this.state.value);
    //change this to have it go to the right schema
    // event.preventDefault();
    console.log(wager);
    console.log(task);
    // try {
    //   console.log("attempting to post new challenge with axios");
    //   await axios({
    //     method: "post",
    //     url: "http://localhost:3000/newTask",
    //     data: {
    //       wagerAmount: { wager },
    //       taskName: { task },
    //     },
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <ChallengeCreator
          handleSubmit={this.handleSubmit}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
