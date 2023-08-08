import React from "react";

function ToDoList({ text, onDelete, id }) {
  return (
    <div>
      <li>{text}</li>
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => onDelete(id)}
      />
    </div>
  );
}

export default ToDoList;
