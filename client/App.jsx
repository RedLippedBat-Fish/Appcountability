import React, { Component } from "react";

// TOP elements
import ChallengeCreator from "./components/top/ChallengeCreator.jsx";
import Nav from "./components/top/Nav.jsx";
import axios from "axios";
// const cors = require("cors"); // --> new

import regeneratorRuntime from "regenerator-runtime";

// BOTTOM elements
// import ChallengeContainer from "./components/bottom/challengeContainer.jsx";
// import { render } from "sass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      wagerAmount: 0,
      accepted: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //add async
  handleSubmit = async (event) => {
    // alert('A name was submitted: ' + this.state.value);
    //change this to have it go to the right schema
    event.preventDefault();
    // console.log(this.state);
    console.log(this.state.taskName);
    console.log(this.state.wagerAmount);
    console.log(this.state.accepted);

    const params = JSON.stringify({
      taskName: this.state.taskName,
      wagerAmount: this.state.wagerAmount,
      accepted: this.state.accepted,
    });

    try {
      // fetch('/api/newTask', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'Application/JSON'
      //   },
      //   body: JSON.stringify(params)
      // })
      // console.log("attempting to post new challenge with axios");
      // await axios.post("http://localhost:8080/api/newTask", params, {
      //   headers: { "content-type": "application/json" },
      // });

      await axios({
        method: "post",
        url: "http://localhost:3000/api/newTask",
        data: {
          taskName: this.state.taskName,
          wagerAmount: this.state.wagerAmount,
          accepted: this.state.accepted,
        },
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    } catch (error) {
      console.log(error);
    }
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
