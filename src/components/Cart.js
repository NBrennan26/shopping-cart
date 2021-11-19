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
            <span className="cart-ltr">{item.letter}</span>
            <span className="cart-pts">Points: {item.price}</span>
            <span className="cart-qty">Qty: {item.quantity}</span>
            <div className="btn-container">
              <button
                className="increase-btn"
                onClick={() => {
                  console.log("Increase Click");
                  handleIncreaseQuantity(item.id);
                }}
              >
                +
              </button>
              <button
                className="decrease-btn"
                onClick={() => {
                  console.log("Decrease Click");
                  handleDecreaseQuantity(item.id);
                }}
              >
                -
              </button>
            </div>
            <button
              className="delete-btn"
              onClick={() => {
                handleDeleteItem(item.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <div id="total-container">
        <div>
          <span>Letters in Cart: {props.letterCount}</span>
          <br />
          <span>Total Points: {props.cartTotal}</span>
        </div>
        <button id="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
