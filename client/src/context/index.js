import React, { useReducer, createContext, useEffect } from "react";
import todosReducer from "./reducer";
import createActions from "./createActions";

const initialState = [{ _id: "", content: "", completed: false }];

export const TodosContext = createContext(initialState);

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  const actions = createActions(dispatch);

  useEffect(() => {
    actions.getTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, actions }}>
      {children}
    </TodosContext.Provider>
  );
};
