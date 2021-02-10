import React from "react";
import "./Addtodo.css";
const Addtodo = (props) => {
  return (
    <div className="AddTodo">
      <form onSubmit={props.add}>
        <input
          placeholder="description"
          className="inputField"
          name="description"
          value={props.description}
          onChange={props.changeFunction}
        />
        <button type="submit" className="addButton">
          add
        </button>
      </form>
    </div>
  );
};
export default Addtodo;
