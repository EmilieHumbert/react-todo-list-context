import React, { useState } from "react";
import { ListProvider } from "./ListContext";

import ListTodos from "./Components/ListTodos";
import AddTodoForm from "./Components/AddTodoForm";

const initialList = [
  {
    id: 0,
    text: "Example of todo",
    completed: false,
  },
];

function App() {
  const listState = useState(initialList);

  return (
    <ListProvider value={listState}>
      <ListTodos />
      <AddTodoForm />
    </ListProvider>
  );
}

export default App;
