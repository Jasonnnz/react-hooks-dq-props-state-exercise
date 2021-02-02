import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {

  const [currentWeight, setCurrentWeight] = useState(50);
  const [currentHeight, setCurrentHeight] = useState("200px");

  function handleChangeWeight(e) {
    if (e.target.name === "+"){
      setCurrentWeight((currentWeight) => currentWeight + 1);
      setCurrentHeight((currentHeight) => ((parseInt(currentHeight.replace("px","")) + 5).toString() + "px"))
    } else {
      setCurrentWeight((currentWeight) => currentWeight - 1);
      setCurrentHeight((currentHeight) => ((parseInt(currentHeight.replace("px","")) - 5).toString() + "px"))
    }
  }
  function whatEyeColor(props){
    if(props.eyeColor === "blue"){
      return normalBaby;
    } else if (props.eyeColor === "sun") {
      return SunBaby;
    } else {
      return GlowingBaby;
    }
  }
  return (
    <li className="hogbabies">
      <h1>Name: {props.name}</h1>
      <h3>Weight: {currentWeight} Pounds</h3>
      <h3>Hobby:{props.hobby}</h3>
      <h4>Eye Color:{props.eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={whatEyeColor(props)}
          style={{ height: currentHeight }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
