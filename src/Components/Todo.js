import React from "react";

import DeleteButton from "./DeleteButton";
import Checkbox from "./Checkbox";

const Todo = ({ todo, handleDelete, handleCheck }) => {
  return (
    <li>
      <Checkbox todo={todo} handleCheck={handleCheck} />
      {todo.text}
      <DeleteButton handleDelete={handleDelete} />
    </li>
  );
};

export default Todo;
