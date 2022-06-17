import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { reducer } from "./context/reducer";
import { todoContext } from "./context/Context"

export default function App() {

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <todoContext.Provider value={{ state, dispatch }}>
      <div className="container display mt-5">
        <h3 className="text-bg-primary mb-4 p-2">To Do List</h3>
        <TodoList />
        <TodoForm />
      </div>
    </todoContext.Provider>
  )
}
document.getElementsByTagName("body")[0].setAttribute("class", "text-bg-warning");