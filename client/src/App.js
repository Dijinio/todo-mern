import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: "2rem", color: "#fff" }}
      >
        Todo App!
      </Typography>
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
