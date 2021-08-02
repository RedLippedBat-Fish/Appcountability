import React from "react";

const testState = {
    name : 'Yolan',
    hobby: 'Kickboxing'
}

const Cards = Obj => {
    return (
        <div className = "itemCard">
        <span> { testState.name } </span>,
      </div>
    );
}


export default Cards;
