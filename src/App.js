import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    setItems((e) => {
      return e.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input
          value={inputList}
          type="text"
          placeholder="Add a Items"
          onChange={itemEvent}
        />
        <button onClick={listOfItems}>+</button>
        <ul>
          {/* <li>{inputList}</li> */}
          {items.map((itemsVal, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemsVal}
                onDelete={deleteItems}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
