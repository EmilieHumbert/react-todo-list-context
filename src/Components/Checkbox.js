import React from "react";
import { Checkbox as CheckboxAnt } from "antd";

const Checkbox = ({ disabled, todo, handleCheck }) => {
  return (
    <CheckboxAnt disabled={disabled} onChange={(todo) => handleCheck(todo)} />
  );
};

export default Checkbox;
