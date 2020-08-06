import React, { useContext, useState } from "react";
import ListContext from "../ListContext";

const AddTodoForm = () => {
  const [list, setList] = useContext(ListContext);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // add input to list
    if (input.length > 0) {
      const id = list.length;
      setList([...list, { id, text: input, completed: false }]);
      // clear the form
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="checkbox" disabled />
      <input
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodoForm;
