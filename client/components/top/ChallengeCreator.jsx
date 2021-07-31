import React from "react";

const ChallengeCreator = () => {
  return (
    <div className="forms">
      <div className="topForms">
        <form className="newChallengeForm">
          <input />
          <button>New Challenge</button>
        </form>
        <form className="inviteUsersForm">
          <input />
          <button>Invite Users</button>
        </form>
      </div>

      <form className="wagerForm">
        <input />
        <button>Wager</button>
      </form>
    </div>
  );
};

export default ChallengeCreator;
