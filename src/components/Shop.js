import React from "react";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  const storeInventory = props.storeInventory;
  const addToCart = props.addToCart;

  return (
    <div className="store-component" id="shop-sec">
      {storeInventory.map((item) => {
        return <ShopItem key={item.id} state={item} addToCart={addToCart} />;
      })}
    </div>
  );
};

export default Shop;
