import React from "react";

const Character = props => {
  console.log("Character props.char", props.char);

  return (
    <div>
      <h4>{props.char.name}</h4>
    </div>
  );
};

export default Character;
