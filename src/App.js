import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { reducer } from "./context/reducer";

export default function App() {

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-sm display">
      <TodoList />
      <TodoForm />
    </div>
  )
}