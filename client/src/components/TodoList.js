import React, { useContext } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import { TodosContext } from "../context";
import "./todoStyle.css";

function TodoList() {
  const {
    todos,
    actions: { removeTodo, completeTodo },
  } = useContext(TodosContext);

  const handleTaskComplete = (e, id) => {
    completeTodo(id);
  };

  return (
    <List>
      {todos.map((todo) => (
        <Paper
          key={todo._id}
          elevation={1}
          className={`todo-item-paper ${todo.completed ? "completed" : ""}`}
        >
          <ListItem>
            <span
              className="todo-anchor"
              onClick={(e) => handleTaskComplete(e, todo._id)}
            ></span>
            <ListItemAvatar>
              <AssignmentIcon color="primary" fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              primary={todo.content}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="Delete"
                id="deleteBtn"
                onClick={() => removeTodo(todo._id)}
              >
                <DeleteIcon color="secondary" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      ))}
    </List>
  );
}

export default TodoList;
