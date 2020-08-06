import React, { useState } from "react";
import { ListProvider } from "./ListContext";

import ListTodos from "./Components/ListTodos";

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
    </ListProvider>
  );
}

export default App;
