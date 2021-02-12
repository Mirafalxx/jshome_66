import React from "react";
import "./Displaytodo.css";

const Displaytodo = (props) => {
  return (
    <div className="asd">
      <li>
        <p>{props.description}</p>
        {/* <input
          type="checkbox"
          checked={props.checked}
          onChange={props.changeChecked}
          defaultChecked={props.checked}
        /> */}
      </li>
      <p onClick={props.remove} className="removeBTN" disabled={!props.checked}>
        x
      </p>
    </div>
  );
};

export default Displaytodo;
