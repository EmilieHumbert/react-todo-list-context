import React, { useContext } from "react";
import ListContext from "../ListContext";

const ListTodos = () => {
  const [list, setList] = useContext(ListContext);

  return (
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ListTodos;
