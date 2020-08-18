import React from "react";
import { Checkbox as CheckboxAnt } from "antd";

const Checkbox = ({ disabled, handleCheck }) => {
  return <CheckboxAnt disabled={disabled} onChange={handleCheck} />;
};

export default Checkbox;
