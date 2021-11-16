import React from "react";
import "./App.css";
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import StoreMain from "./components/StoreMain"
import Home from "./components/Home"
import Shop from "./components/Shop"
import About from "./components/About"
import Cart from "./components/Cart"

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <StoreMain />
        <Home />
        <Shop />
        <About />
        <Cart />
      <Footer />
    </div>
  )
};

export default App;
