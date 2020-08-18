import React, { useState, useContext } from "react";
import { Button, Col, Input, List, Row } from "antd";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  EditTwoTone,
} from "@ant-design/icons";

import ListContext from "../ListContext";
import DeleteButton from "./DeleteButton";
import Checkbox from "./Checkbox";

const Todo = ({ todo, handleDelete, handleCheck }) => {
  const [input, setInput] = useState(todo.text);
  const [updateTodo, setUpdateTodo] = useState(false);
  const [list, setList] = useContext(ListContext);

  // manage change
  const handleEditChange = (e) => {
    setInput(e.target.value);
  };

  // manage edit click
  const handleEditClick = () => {
    setUpdateTodo(!updateTodo);
  };

  // manage edit submit
  const handleSaveClick = () => {
    const updatedText = input.length > 0 ? input : "[untitled]";
    setUpdateTodo(false);

    const updatedTodo = { ...todo, text: updatedText };
    setList(list.map((item) => (item === todo ? updatedTodo : item)));
    if (input.length > 0) {
      setInput(updatedText);
    }
  };

  // manage edit cancel
  const handleCancelClick = () => {
    setUpdateTodo(false);
    setInput(todo.text);
  };

  return (
    <List.Item>
      <Row align="middle" gutter={8} style={{ flexGrow: 1 }}>
        <Col flex="0 0 auto">
          <Checkbox todo={todo} handleCheck={handleCheck} />
        </Col>
        <Col flex="1 0 auto">
          {updateTodo ? (
            <Input value={input} onChange={handleEditChange} />
          ) : (
            <div style={{ padding: "5px 12px" }}>{input}</div>
          )}
        </Col>
        <Col flex="0 0 auto">
          {updateTodo ? (
            <Button
              icon={<CheckCircleTwoTone twoToneColor="#7FFF00" />}
              onClick={handleSaveClick}
            />
          ) : (
            <Button
              icon={<EditTwoTone />}
              onClick={handleEditClick}
              type="submit"
            />
          )}
        </Col>
        <Col flex="0 0 auto">
          {updateTodo ? (
            <Button
              icon={<CloseCircleTwoTone twoToneColor="red" />}
              onClick={handleCancelClick}
            />
          ) : (
            <DeleteButton handleDelete={handleDelete} />
          )}
        </Col>
      </Row>
    </List.Item>
  );
};

export default Todo;
