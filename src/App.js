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
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputList,
      };
      return [...oldItems, allInputData];
    });
    setInputList("");
  };
  const deleteItems = (index) => {
    setItems((e) => {
      return e.filter((arrElm) => {
        return index !== arrElm.id;
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
          {items.map((itemsVal) => {
            return (
              <ToDoList
                key={itemsVal.id}
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
