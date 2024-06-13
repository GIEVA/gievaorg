import React from "react";

function Display(props) {
  return (
    <div>
          <h3>Hello everyone, my name is {props.name}</h3>
          <p>The title of my favourite book is {props.title}</p>
      <p>
        The square of {props.number} is {props.number * props.number}
      </p>
    </div>
  );
}

export default Display;
