import React from "react";
import Cards from "./cards.jsx";

const CardContainer = () => {
  return (
    <div>
      <h3 id="cardContainerLabel"> Active Challenges</h3>
      <div>
        <Cards />
      </div>
      {/* //         <ItemForm id = "itemForm"/>
//         {this.state.items.map((items, i) => ( */}
      {/* //         <ItemCard className= 'itemCard' key={i} id={i} details={this.state.items[i]} /> */}
    </div>
  );
};

export default CardContainer;
