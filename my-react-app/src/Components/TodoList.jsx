import React from "react";

export default function TodoList() {
  let todos = ["Laundary", "Study", "Work out"];
  return (
    <ul className="main">
      {todos.map((todos, index) => {
        return (
          <li className="todoItem" key={index}>
            {todos}
          </li>
        );
      })}
    </ul>
  );
}
