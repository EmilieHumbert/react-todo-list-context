import React from "react";

const Checkbox = ({ todo, handleCheck }) => {
  return (
    <input
      type="checkbox"
      onChange={(todo) => handleCheck(todo)}
    />
  );
};

export default Checkbox;
