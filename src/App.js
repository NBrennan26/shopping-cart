import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StoreMain from "./components/StoreMain";

const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <StoreMain />
      <Footer />
    </Router>
  );
};

export default App;
