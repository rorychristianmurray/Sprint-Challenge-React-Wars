import React from "react";
import { Container, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const Character = props => {
  console.log("Character props.char", props.char);

  return (
    <Container>
      <div>
        <Divider />
        <h4>{props.char.name}</h4>
        <Divider />
      </div>
    </Container>
  );
};

export default Character;
