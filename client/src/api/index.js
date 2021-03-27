import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchTodos = () => API.get("/todos");
export const postTodo = (todo) => API.post("/todos/create", todo);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const compTodo = (id) => API.patch(`/todos/complete`, { id });
