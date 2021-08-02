import React from "react";

const testState = {
    challenge : 'Daily Workout', 
    wager : '$100', 
    description: 'workout 5 days per week'
}

const Cards = Obj => {
    return(
        <div>
            <ul> 
                <li>{testState.challenge}</li>
                <li>{testState.wager}</li>
            </ul>
        </div>
    );

}; 

export default Cards; 