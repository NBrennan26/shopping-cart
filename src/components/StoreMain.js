import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Inventory from "./Inventory";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import NotFound from "./NotFound";

function StoreMain() {
  const [testState, setTestState] = useState("Test");

  const updateState = () => {
    if (testState === "Test") setTestState("Test Test");
  };

  updateState();

  const storeInventory = Inventory

  return (
    <div className="store-component">
      <Routes>
        <Route path="/" element={<Home storeInventory={storeInventory} />} />
        <Route path="/shop" element={<Shop storeInventory={storeInventory} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default StoreMain;
