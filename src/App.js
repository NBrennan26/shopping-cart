import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StoreMain from "./components/StoreMain";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <StoreMain />
      <Footer />
    </div>
  );
};

export default App;
