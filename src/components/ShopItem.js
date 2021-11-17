import React from "react";

const ShopItem = (props) => {

  const state = props.state

  return (
    <div className="shop-item">
      <span class="letter-disp">{state.letter}</span>
      <span>{state.desc}</span>
      <span>{state.price} points</span>
      <span>Total Available: {state.amount}</span>
      <span>Add to Cart</span>
    </div>
  );
};

export default ShopItem;
