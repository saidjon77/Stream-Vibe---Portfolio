import React, { useState } from "react";
import Slider from "../../Ui/Slider/Slider";
import "./Main.scss";
import Question from "../../Ui/Question/Question";
import Plan from "../../Ui/Plan/PLan";

function App() {

  return (
    <div className="Main">
      <Slider uniqueId={5}/>
      <Question/>
      <Plan/>
    </div>
  );
}

export default App;
