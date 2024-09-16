import React from "react";
import { useState } from "react";

export default function Todoinput(props) {
  let { addTodo, inputData, setInputData } = props;
  return (
    <header>
      <input
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        onKeyUp={(e) => {
          e.key === "Enter" && addTodo(inputData);
          e.key === "Enter" && setInputData("");
        }}
        placeholder="Add task...."
      />
      <button
        onClick={() => {
          addTodo(inputData);
          setInputData("");
        }}
      >
        ADD
      </button>
    </header>
  );
}
