import React, { useContext } from "react";
import { Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

import ListContext from "../ListContext";

const TodoDeleteButton = ({ todo }) => {
  const [list, setList] = useContext(ListContext);

  const handleDelete = () => {
    setList(list.filter((listTodo) => listTodo !== todo));
  };

  return <Button icon={<DeleteTwoTone />} onClick={handleDelete} />;
};

export default TodoDeleteButton;
