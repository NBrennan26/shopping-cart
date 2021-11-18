import React from "react";

const Cart = (props) => {
  const userCart = props.userCart;
  const handleIncreaseQuantity = props.handleIncreaseQuantity;
  const handleDecreaseQuantity = props.handleDecreaseQuantity;
  console.log(userCart);

  return (
    <div className="store-component" id="cart-sec">
      <h2>Cart</h2>
      {userCart.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <span>{item.letter}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
            <button
              className="increase-button"
              onClick={() => {
                console.log("Increase Click");
                handleIncreaseQuantity(item.id);
              }}
            >
              +
            </button>
            <button
              className="decrease-button"
              onClick={() => {
                console.log("Decrease Click");
                handleDecreaseQuantity(item.id);
              }}
            >
              -
            </button>
            <button className="delete-button">X</button>
          </div>
        );
      })}
      <div>
        <button>Checkout</button>
        <button>Update Cart</button>
      </div>
    </div>
  );
};

export default Cart;
