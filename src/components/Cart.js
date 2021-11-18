import React from "react";

const Cart = (props) => {
  const userCart = props.userCart;
  const handleIncreaseQuantity = props.handleIncreaseQuantity;
  const handleDecreaseQuantity = props.handleDecreaseQuantity;
  const handleDeleteItem = props.handleDeleteItem;

  return (
    <div className="store-component" id="cart-sec">
      <h2>Cart</h2>
      {userCart.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <span className="cart-letter">{item.letter}</span>
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
            <button
              className="delete-button"
              onClick={() => {
                handleDeleteItem(item.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
