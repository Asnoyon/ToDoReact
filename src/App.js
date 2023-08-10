import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

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
  // const deleteItems = (index) => {
  //   setItems((e) => {
  //     return e.filter((arrElm) => {
  //       return index !== arrElm.id;
  //     });
  //   });
  // };
  const deleteItems = (id) => {
    const taskCopy = [...items];
    taskCopy.splice(id, 1);
    setItems(taskCopy);
  };
  // const editItem = (id) => {
  //   let newEditItems = items.find((elem) => {
  //     return elem.id === id;
  //   });
  // };
  const clearItem = () => {
    setItems([]);
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
          onChange={(e) => setInputList(e.target.value)}
        />
        <button onClick={listOfItems}>+</button>
        <ul>
          {/* <li>{inputList}</li> */}
          {items.map((itemsVal, id) => {
            return (
              <ToDoList
                key={itemsVal.id}
                id={id}
                text={itemsVal}
                onDelete={deleteItems}
              />
            );
          })}
        </ul>
        <button onClick={clearItem}>Clear All</button>
      </div>
    </div>
  );
};

export default App;
