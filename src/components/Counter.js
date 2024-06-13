import React, { useState } from "react";
import api from "./api";
import Display from "./Display";

function Counter() {
  const [apiVal, setApiVal] = useState(api);
  let list = apiVal.map((x, index) => {
    // const { name, title, number, id } = x;
    return <Display key={index} {...x} />;
  });
  return (
    <div>
      <div>
        <div>{list}</div>
      </div>
    </div>
  );
}

export default Counter;
