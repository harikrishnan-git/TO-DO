import React from "react";
import TodoInput from "./Components/TodoInput.jsx";
import TodoList from "./Components/TodoList.jsx";

export default function App() {
  let todos = ["Laundary", "Study", "Work out"];
  return (
    <main>
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </main>
  );
}
