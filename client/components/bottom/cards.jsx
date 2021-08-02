import React, { Component } from "react";


class Cards extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  compoentDidMount() {
      console.log('mounted cards');
  }

  render () {
    return (
      <div className = "itemCard">
        <p>TaskName : {this.props.taskName}</p>
        <p>Wager Amount : {this.props.wagerAmount}</p>
        <p>Accepted : {this.props.accepted}</p>
      </div>
    )
  }
}



export default Cards;
