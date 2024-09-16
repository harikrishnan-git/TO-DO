import React from "react";
import TodoInput from "./Components/TodoInput.jsx";
import TodoList from "./Components/TodoList.jsx";

export default function App() {
  return (
    <main>
      <TodoInput />
      <TodoList />
    </main>
  );
}
