import React, { useState, useContext } from "react";

import ListContext from "../ListContext";
import DeleteButton from "./DeleteButton";
import Checkbox from "./Checkbox";

const Todo = ({ todo, handleDelete, handleCheck }) => {
  const [input, setInput] = useState(todo.text);
  const [updatedTodo, setUpdatedTodo] = useState(false);
  const [list, setList] = useContext(ListContext);

  // manage change
  const handleEditChange = (e) => {
    setInput(e.target.value);
  };

  // manage edit click
  const handleEditClick = () => {
    setUpdatedTodo(!updatedTodo);
  };

  // manage edit submit
  const handleSaveClick = () => {
    const updatedTodo = input.length > 0 ? input : "[untitled]";
    setUpdatedTodo(false);

    const updateTodo = { ...todo, text: updatedTodo };
    setList(
      list.map((item) => (item === todo ? updateTodo : item))
    );
    if (input.length > 0) {
      setInput(updatedTodo);
    }
  };

  // manage edit cancel
  const handleCancelClick = () => {
    setUpdatedTodo(false);
    setInput(todo.text);
  };
  return (
    <>
      {updatedTodo ? (
        <li>
          <Checkbox todo={todo} handleCheck={handleCheck} />
          <input value={input} onChange={handleEditChange} />
          <button onClick={handleSaveClick}>SAVE</button>
          <button onClick={handleCancelClick}>CANCEL</button>
        </li>
      ) : (
        <li>
          <Checkbox todo={todo} handleCheck={handleCheck} />
          {input}
          <DeleteButton handleDelete={handleDelete} />
          <button type="submit" onClick={handleEditClick}>
            EDIT
          </button>
        </li>
      )}
    </>
  );
};

export default Todo;
