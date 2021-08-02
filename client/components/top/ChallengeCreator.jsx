import React, { Component } from "react";
// import axios from "axios";
// import regeneratorRuntime from "regenerator-runtime";

class ChallengeCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="submitBtns">
        <form onSubmit={this.props.handleSubmit}>
          {/* <div> */}
          <input
            type="text"
            name="taskName"
            value={this.props.taskName}
            placeholder="Task Name"
            onChange={this.props.changeHandler}
          />
          {/* </div>
          <div> */}
          <input
            type="number"
            name="wagerAmount"
            value={this.props.wagerAmount}
            placeholder="Wager Amount"
            onChange={this.props.changeHandler}
          />
          {/* </div> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ChallengeCreator;

