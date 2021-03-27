const todosReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "CREATE_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      const filteredTodos = state.filter((todo) => todo._id !== action.payload);
      return filteredTodos;
    case "COMPLETE_TODO":
      const updatedPosts = state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      return updatedPosts;

    default:
      return state;
  }
};

export default todosReducer;
