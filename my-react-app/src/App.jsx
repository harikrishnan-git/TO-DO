import React from "react";
import { useState } from "react";
import TodoInput from "./Components/TodoInput.jsx";
import TodoList from "./Components/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState(["workout", "drink water", "write diary"]);
  const [inputData, setInputData] = useState("");
  function addTodo(newtodo) {
    let ntodo = [...todos, newtodo];
    setTodos(ntodo);
  }
  function remTodo(index) {
    let ntodos = [...todos];
    ntodos.splice(index, 1);
    setTodos(ntodos);
  }
  function editTodo(index) {
    let ntodo = todos[index];
    setInputData(ntodo);
    remTodo(index);
  }
  return (
    <main>
      <TodoInput
        addTodo={addTodo}
        inputData={inputData}
        setInputData={setInputData}
      />
      <TodoList todos={todos} remTodo={remTodo} editTodo={editTodo} />
    </main>
  );
}
