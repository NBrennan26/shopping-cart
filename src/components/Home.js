import React from "react";

const Home = (props) => {

  console.log(props.testState)
  return (
    <div className="store-component" id="home-sec">
      <h2>Home</h2>
      <h3>{props.testState}</h3>
    </div>
  );
}

export default Home;
