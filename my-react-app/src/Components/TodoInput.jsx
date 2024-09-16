import React from "react";

export default function Todoinput(props) {
  let { todos } = props;
  return (
    <header>
      <input placeholder="Add task...." />
      <button>ADD</button>
    </header>
  );
}
