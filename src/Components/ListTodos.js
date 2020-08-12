import React, { useContext } from "react";
import ListContext from "../ListContext";

import Todo from "./Todo";

const ListTodos = () => {
  const [list, setList] = useContext(ListContext);

  const handleDelete = (todo) => {
    setList(list.filter((listTodo) => listTodo !== todo));
  };

  const handleCheck = (todo) => {
    const checkUpdate = { ...todo, completed: !todo.completed };
    setList(list.map((listTodo) => ((listTodo === todo) ? checkUpdate : listTodo)));
    console.log(todo);
  };

  return (
    <ul>
      {list.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDelete={() => handleDelete(todo)}
          handleCheck={() => handleCheck(todo)}
        />
      ))}
    </ul>
  );
};

export default ListTodos;
