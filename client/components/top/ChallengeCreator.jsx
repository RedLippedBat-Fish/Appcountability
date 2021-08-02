import React from "react";

const ChallengeCreator = () => {
  return (
    <div className="forms">
      <div className="topForms">
        <form className="challengeForm">
          <input placeholder="Challenge" />
          <input id="wagerForm" placeholder="Wager" />
          <button>New Challenge</button>
        </form>
        <form className="inviteUsersForm">
          <input />
          <button>Invite Users</button>
        </form>
      </div>
    </div>
  );
};

export default ChallengeCreator;
