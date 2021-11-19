import React from "react";
import { NavLink } from "react-router-dom";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  const storeInventory = props.storeInventory;
  const addToCart = props.addToCart;

  return (
    <div className="store-component" id="shop-sec">
      {storeInventory.map((item) => {
        return <ShopItem key={item.id} state={item} addToCart={addToCart} />;
      })}
      <NavLink className="inner-nav" to="/cart">Proceed to Cart</NavLink>
      <a href="#header" className="inner-nav">Top of Page</a>
    </div>
  );
};


export default Shop;


