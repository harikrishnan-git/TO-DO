import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  let { todos } = props;
  const { remTodo } = props;
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard key={index} remTodo={remTodo} index={index}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
