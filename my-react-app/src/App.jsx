import React from "react";
import { useState } from "react";
import TodoInput from "./Components/TodoInput.jsx";
import TodoList from "./Components/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState(["workout", "drink water", "write diary"]);
  function addTodo(newtodo) {
    let newtodo = [...todos, newtodo];
    setTodos(newtodo);
  }
  return (
    <main>
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </main>
  );
}
