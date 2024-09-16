import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  let { todos, remTodo, editTodo } = props;
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard
            key={index}
            remTodo={remTodo}
            index={index}
            editTodo={editTodo}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
