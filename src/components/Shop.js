import React from "react";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  const storeInventory = props.storeInventory;
  console.log(storeInventory);

  return (
    <div className="store-component" id="shop-sec">
      {storeInventory.map((item) => {
        return <ShopItem
          key={item.id}
          state={item}
        />;
      })}
    </div>
  );
};

export default Shop;
