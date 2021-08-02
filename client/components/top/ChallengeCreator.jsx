import React, {Component } from "react";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

class ChallengeCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="submitBtns">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="challengeName"
              // value={taskName}
              placeholder="Challenge Name"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="number"
              name="wager"
              // value={wagerAmount}
              placeholder="Wager Amount"
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ChallengeCreator;

// It can be invoked remotely as well
// handleSubmit(onSubmit)();

// You can pass an async function for asynchronous validation.
// handleSubmit(async (data) => await fetchAPI(data))

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data, e) => console.log(data, e);
//   const onError = (errors, e) => console.log(errors, e);

//   return (
//     <form onSubmit={handleSubmit(onSubmit, onError)}>
//       <input {...register("firstName")} />
//       <input {...register("lastName")} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
