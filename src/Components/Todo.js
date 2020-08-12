import React from "react";

import DeleteButton from "./DeleteButton";

const Todo = ({ todo, handleDelete }) => {
  return (
    <li>
      <input type="checkbox" />
      {todo.text}
      <DeleteButton handleDelete={handleDelete} />
    </li>
  );
};

export default Todo;
