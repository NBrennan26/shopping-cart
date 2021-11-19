import React from "react";
import board from "../assets/images/board.jpg";

const Home = (props) => {
  const storeInventory = props.storeInventory;

  const randomNumber = () => {
    return Math.floor(Math.random() * 26) + 1;
  };

  let featuredLetter = storeInventory[randomNumber()].letter;

  return (
    <div className="store-component" id="home-sec">
      <div id="home-text">
        <h2>This is a Store for Letters</h2>
        <h6>Please buy some</h6>
        <div id="feat-let">
          Our current <b>Featured Letter</b> is <b>{featuredLetter}</b>
        </div>
      </div>
      <div>
        <img id="board-img" src={board} alt="scrabble-board" />
      </div>
    </div>
  );
};

export default Home;
