import React, { useState } from "react";
import Master from "../assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function MasterHog() {
  const [eyeColor, setEyeColor] = useState("blue");
  
  let babyHogs = offspring.map((baby) => {
    return <BabyHog key={baby.id} eyeColor={eyeColor} name={baby.name} hobby={baby.hobby}/>
  })
  
  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Master Blaster</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="masters-domicile">
        <img id="master-blaster" src={Master} alt="" />
      </div>
      <ul className="hoglist">
        {babyHogs}
      </ul>
    </div>
  );
}

export default MasterHog;
