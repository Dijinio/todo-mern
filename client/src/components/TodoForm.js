import React, { useContext, useState } from "react";
import { TodosContext } from "../context/";
import { Button, Grid, Paper, TextField } from "@material-ui/core";

function TodoForm() {
  const [task, setTask] = useState("");
  const {
    actions: { createTodo },
  } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(task);
    setTask("");
  };

  return (
    <Paper elevation={1} style={{ padding: "1rem", marginTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <TextField
              type="text"
              variant="outlined"
              label="Task"
              required
              autoFocus
              fullWidth
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ height: "100%" }}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default TodoForm;
