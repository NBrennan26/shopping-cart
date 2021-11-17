import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import NotFound from "./NotFound";

function StoreMain() {
  const [testState, setTestState] = useState("Test");

  const updateState = () => {
    if (testState === "") setTestState("Test Test");
  };

  updateState();

  return (
    <div className="store-component">
      <Routes>
        <Route path="/home" element={<Home />} testState={testState} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default StoreMain;
