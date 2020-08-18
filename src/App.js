import React, { useState } from "react";
import { Typography } from "antd";

import { ListProvider } from "./ListContext";
import ListTodos from "./Components/ListTodos";
import AddTodoForm from "./Components/AddTodoForm";

import "./App.css";

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
    <>
      <Typography.Title
        style={{
          margin: "2rem 0",
          textAlign: "center",
        }}
      >
        TO DO:
      </Typography.Title>
      <ListProvider value={listState}>
        <div
          style={{
            maxWidth: "30rem",
            margin: "0 auto",
            padding: "1rem",
            backgroundColor: "#fff",
            boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          <ListTodos
            style={{
              textAlign: "center",
              maxWidth: "300px",
              marginBottom: "2rem",
            }}
          />
          <AddTodoForm />
        </div>
      </ListProvider>
    </>
  );
}

export default App;
