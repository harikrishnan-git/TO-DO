import React from "react";
import { useState } from "react";

export default function Todoinput(props) {
  let { addTodo } = props;
  const [inputData, setInputData] = useState("");
  return (
    <header>
      <input
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        placeholder="Add task...."
      />
      <button
        onClick={() => {
          addTodo(inputData);
        }}
      >
        ADD
      </button>
    </header>
  );
}
