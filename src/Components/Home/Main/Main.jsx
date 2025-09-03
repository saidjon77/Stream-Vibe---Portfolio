import React, { useState } from "react";
import Slider from "../../Ui/Slider/Slider";
import "./Main.scss";
import Question from "../../Question/Question";
import Plan from "../../Plan/PLan";

function App() {

  return (
    <div className="Main">
      <Slider title={"Explore our wide variety of categories"} url={`discover/tv`} uniqueId={5} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <Question/>
      <Plan/>
    </div>
  );
}

export default App;
