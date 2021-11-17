import React from "react";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  const storeInventory = props.storeInventory;
  console.log(storeInventory);

  return (
    <div className="store-component" id="shop-sec">
      <h2>Shop</h2>
      {storeInventory.map((item) => {
        return <ShopItem key={item.id} />;
      })}
    </div>
  );
};

export default Shop;
