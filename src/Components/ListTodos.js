import React, { useContext } from "react";
import ListContext from "../ListContext";

import Todo from "./Todo";

const ListTodos = () => {
  const [list, setList] = useContext(ListContext);

  const handleDelete = (todo) => {
    setList(list.filter((listTodo) => listTodo !== todo));
  };

  return (
    <ul>
      {list.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDelete={() => handleDelete(todo)}
        />
      ))}
    </ul>
  );
};

export default ListTodos;
