import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StoreMain from "./components/StoreMain";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <StoreMain />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
