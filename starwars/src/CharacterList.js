import React from "react";
import Character from "./Character";

const CharacterList = props => {
  console.log("CharacterList props.chars.results", props.chars.results);
  if (!props.chars.results) return <h3>Loading...</h3>;

  return (
    <div>
      {props.chars.results.map(char => {
        return <Character char={char} key={char.name} />;
      })}
    </div>
  );
};

export default CharacterList;
