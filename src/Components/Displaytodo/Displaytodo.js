import React from "react";
import "./Displaytodo.css";

const Displaytodo = (props) => {
  return (
    <div className="asd">
      <li>
        <p className="titleTask">{props.description}</p>
      </li>
      <span onClick={props.remove} className="removeBTN">
        x
      </span>
    </div>
  );
};

export default Displaytodo;
