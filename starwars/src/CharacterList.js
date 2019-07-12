import React from "react";
import Character from "./Character";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CharacterList = props => {
  console.log("CharacterList props.chars.results", props.chars.results);
  if (!props.chars.results) return <h3>Loading...</h3>;

  return (
    <div>
      <Grid>
        {props.chars.results.map(char => {
          return <Character char={char} key={char.name} />;
        })}
      </Grid>
    </div>
  );
};

export default CharacterList;
