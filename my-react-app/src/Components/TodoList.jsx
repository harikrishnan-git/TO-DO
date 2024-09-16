import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  let { todos } = props;
  return (
    <ul className="main">
      {todos.map((todos, index) => {
        return (
          <TodoCard key={index}>
            <p>{todos}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
