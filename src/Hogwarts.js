import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
import {colors, gryffMascot} from "./houses/Gryffindor";

function Hogwarts() {
  whoseHouse(); // => "HAGRID'S HOUSE!"

  console.log(colors);
  console.log(gryffMascot());

  return (
    <>
      <h1>Welcome to Hogwarts!</h1>
      <div>
        <Hufflepuff />
      </div>
    </>
  )
}

export default Hogwarts;