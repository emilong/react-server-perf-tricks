import React from "react";


function click() {
  alert("clicked!");
}

const RecursiveDivs = (props) => {
  const {depth, breadth} = props;

  if (depth <= 0) {
    return <div>{"abcdefghij"}</div>;
  }

  let children = [];
  for (let i = 0; i < breadth; i++) {
    children.push(<RecursiveDivs key={i} depth={depth-1} breadth={breadth}/>);
  }
  return <div onClick={click}>{children}</div>;
};

export default RecursiveDivs;
