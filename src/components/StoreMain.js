import React from "react";
import { Outlet } from "react-router-dom"


function StoreMain() {
  return (
    <div className="store-component">
      <h2>Store Main</h2>
      <Outlet />
    </div>
  );
}

export default StoreMain;
