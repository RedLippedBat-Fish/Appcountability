import React, { Component } from "react";
import Cards from "./cards.jsx";

class ChallengeContainer extends Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   allTasks : [],
    // }
  }
  
//   componentDidMount() {
//     console.log('got into componentdidMount');
//     // fetch('/api/getAllTasks') // ---> need to create this route in api, task controller
//     //   .then(res => res.json())
//     //   .then(result => {
//     //     console.log('result fetched from getAllTasks =', result);
//     //     this.setState({ allTasks : result });
//     //   })
//     //   .catch(err => console.log('fetch getAllTasks error'));
//   }


  render () {
    
    const availTasks = this.props.allTasks;
    console.log(this.props.allTasks);
    // const availTasks = [{taskName : 'kickboxing', wagerAmount: 100, accepted: false}, {taskName : 'eat bread', wagerAmount: 100, accepted: false}];

    const tasksToAdd = [];
    for (let i = 0; i < availTasks.length; i++) {
      tasksToAdd.push(
        <Cards
          key={i}
          wagerAmount={availTasks[i].wagerAmount}
          taskName={availTasks[i].taskName}
          // accepted={availTasks[i].accepted}
        />
      )
    }

    return (
      <div className='taskContainer'>
        {tasksToAdd}
      </div>
    );
  }
}

export default ChallengeContainer;
