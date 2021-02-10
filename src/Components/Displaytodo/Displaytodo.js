import React from "react";
import "./Displaytodo.css";

const Displaytodo = (props) => {
  return (
    <div className="container">
      <p>Описание:{props.description}</p>
      <span onClick={props.remove} className="removeBTN">
        x
      </span>
    </div>
  );
};

export default Displaytodo;
