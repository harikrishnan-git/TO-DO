import React from "react";
import { useState } from "react";
import TodoInput from "./Components/TodoInput.jsx";
import TodoList from "./Components/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState(["workout", "drink water", "write diary"]);
  function addTodo(newtodo) {
    let ntodo = [...todos, newtodo];
    setTodos(ntodo);
  }
  return (
    <main>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}
