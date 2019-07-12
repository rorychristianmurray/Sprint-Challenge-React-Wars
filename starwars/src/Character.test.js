import React from "react";
import ReactDOM from "react-dom";
import Character from "./Character";
import renderer from "react-test-renderer";

describe("<Character />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Character />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
