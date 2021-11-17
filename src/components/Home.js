import React from "react";

const Home = (props) => {

  const storeInventory = props.storeInventory

  const randomNumber = () => {
    return Math.floor(Math.random() * 26) + 1;
  }

  let featuredLetter = storeInventory[randomNumber()].title

  return (
    <div className="store-component" id="home-sec">
      <h2>This is a Store for Letters</h2>
      <h6>Please buy some</h6>
      <div>Our current <b>Featured Letter</b> is the {featuredLetter}</div>
    </div>
  );
};

export default Home;
