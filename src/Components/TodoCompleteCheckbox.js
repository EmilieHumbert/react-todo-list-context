import React, { useContext } from "react";
import { Checkbox } from "antd";

import ListContext from "../ListContext";

const TodoCheckboxComplete = ({ disabled, todo }) => {
  const [list, setList] = useContext(ListContext);

  const handleCheck = () => {
    const checkUpdate = { ...todo, completed: !todo.completed };
    setList(
      list.map((listTodo) => (listTodo === todo ? checkUpdate : listTodo))
    );
  };

  return <Checkbox disabled={disabled} onChange={handleCheck} />;
};

export default TodoCheckboxComplete;
