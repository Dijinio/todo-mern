import axios from "axios";

export const fetchTodos = () => axios.get("/todos");
export const postTodo = (todo) => axios.post("/todos/create", todo);
export const deleteTodo = (id) => axios.delete(`/todos/${id}`);
export const compTodo = (id) => axios.patch(`/todos/complete`, { id });
