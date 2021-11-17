import React from "react";

const Cart = (props) => {
  const userCart = props.userCart;
  console.log(userCart);

  return (
    <div className="store-component" id="cart-sec">
      <h2>Cart</h2>
      {userCart.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <span>{item.letter}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
