import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Inventory from "./Inventory";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import NotFound from "./NotFound";

function StoreMain() {
  const [userCart, setUserCart] = useState([]);
  const storeInventory = Inventory;

  const addToCart = (id) => {
    const newItem = storeInventory.filter((item) => item.id === id);
    if (userCart.indexOf(newItem[0]) < 0) {
      setUserCart((cart) => [...cart, newItem[0]]);
    }
  };

  const handleIncreaseQuantity = (id) => {
    const mappedCart = userCart.map((item) => {
      const newQuantity = item.quantity + 1;
      if (item.id === id && newQuantity <= item.available) {
        const source = { quantity: newQuantity };
        const newItem = Object.assign(item, source);
        return newItem;
      }
      return item;
    });
    setUserCart(mappedCart);
  };

  const handleDecreaseQuantity = (id) => {
    const mappedCart = userCart.map((item) => {
      const newQuantity = item.quantity - 1;
      if (item.id === id && newQuantity >= 0) {
        const source = { quantity: item.quantity - 1 };
        const newItem = Object.assign(item, source);
        return newItem;
      }
      return item;
    });
    setUserCart(mappedCart);
  };

  const handleDeleteItem = (id) => {
    const filteredCart = userCart.filter((item) => item.id !== id);
    setUserCart(filteredCart);
  };

  return (
    <div className="store-component">
      <Routes>
        <Route path="/" element={<Home storeInventory={storeInventory} />} />
        <Route
          path="/shop"
          element={
            <Shop storeInventory={storeInventory} addToCart={addToCart} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              userCart={userCart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleDeleteItem={handleDeleteItem}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default StoreMain;
