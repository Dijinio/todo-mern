import * as api from "../api";

const createActions = (dispatch) => {
  return {
    getTodos: async () => {
      try {
        const { data } = await api.fetchTodos();
        dispatch({ type: "FETCH_TODOS", payload: data });
      } catch (error) {
        console.log(error);
      }
    },
    createTodo: async (content) => {
      try {
        const { data } = await api.postTodo({ content });
        dispatch({ type: "CREATE_TODO", payload: data });
      } catch (error) {
        console.log(error);
      }
    },
    removeTodo: async (id) => {
      try {
        await api.deleteTodo(id);
        dispatch({ type: "REMOVE_TODO", payload: id });
      } catch (error) {
        console.log(error);
      }
    },
    completeTodo: async (id) => {
      try {
        const { data } = await api.compTodo(id);
        dispatch({ type: "COMPLETE_TODO", payload: data });
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default createActions;
