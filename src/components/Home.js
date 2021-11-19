import React from "react";
import board from "../assets/images/board"

const Home = (props) => {
  const storeInventory = props.storeInventory;

  const randomNumber = () => {
    return Math.floor(Math.random() * 26) + 1;
  };

  let featuredLetter = storeInventory[randomNumber()].letter;

  return (
    <div className="store-component" id="home-sec">
    <div>
      <h2>This is a Store for Letters</h2>
      <h6>Please buy some</h6>
      <div>
        Our current <b>Featured Letter</b> is {featuredLetter}
      </div>
    </div>
    <div>
      <img src={board} alt="scrabble-board" />
    </div>
      
    </div>
  );
};

export default Home;
