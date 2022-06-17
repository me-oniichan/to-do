import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import reducer from "./context/reducer";
import { todoContext } from "./context/Context"

export default function App() {

  const [todo, dispatch] = useReducer(reducer, []);

  return (
    <div className="container display mt-5">
      <todoContext.Provider value={{ todo, dispatch }}>
        <h3 className="text-bg-primary mb-4 p-2">To Do List</h3>
        <TodoList />
        <TodoForm />
      </todoContext.Provider>
    </div>
  )
}
document.getElementsByTagName("body")[0].setAttribute("class", "text-bg-warning");