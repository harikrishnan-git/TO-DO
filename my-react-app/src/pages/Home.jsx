import React from "react";
import { useState, useEffect } from "react";
import TodoInput from "../Components/TodoInput.jsx";
import TodoList from "../Components/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState(["workout", "drink water", "write diary"]);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localstorage = localStorage.getItem("todos_key");
    if (!localstorage) {
      return;
    }
    setTodos(JSON.parse(localstorage));
  }, []);

  function persistData(newList) {
    localStorage.setItem("todos_key", JSON.stringify(newList));
  }
  function addTodo(newtodo) {
    let ntodo = [...todos, newtodo];
    setTodos(ntodo);
    persistData(ntodo);
  }
  function remTodo(index) {
    let ntodos = [...todos];
    ntodos.splice(index, 1);
    setTodos(ntodos);
    persistData(ntodos);
  }
  function editTodo(index) {
    let ntodo = todos[index];
    setInputData(ntodo);
    remTodo(index);
    persistData(ntodo);
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
