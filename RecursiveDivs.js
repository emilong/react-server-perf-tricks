import React from "react";
import { branch } from "recompose";

function click() {
  alert("clicked!");
}

const RecursiveDivs = branch(
  ({ depth }) => depth <= 0,
  () => props => <div>{"abcdefghij"}</div>,
  () => ({ depth, breadth })=> {
    const children = [];
    for (let i = 0; i < breadth; i++) {
      children.push(<RecursiveDivs key={i} depth={depth-1} breadth={breadth}/>);
    }
    return <div onClick={click}>{children}</div>;
  },
  () => false
);

export default RecursiveDivs;
