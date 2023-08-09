import React from "react";

function ToDoList({ text, onDelete, id }) {
  return (
    <div>
      <li>{text.name}</li>
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => onDelete(text.id)}
      />
    </div>
  );
}

export default ToDoList;
