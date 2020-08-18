import React, { useContext } from "react";
import { List } from "antd";

import ListContext from "../ListContext";
import Todo from "./Todo";

const ListTodos = () => {
  const [list] = useContext(ListContext);

  return (
    <List
      dataSource={list}
      renderItem={(todo) => <Todo key={todo.id} todo={todo} />}
    />
  );
};

export default ListTodos;
