import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Todoinput(props) {
  let { addTodo, inputData, setInputData } = props;
  let notify = () => {
    toast.error("You have not entered the task!!");
  };
  return (
    <header>
      <input
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter" && e.target.value.trim() === "") {
            notify();
          }
          if (e.key === "Enter" && e.target.value.trim() !== "") {
            addTodo(inputData);
          }
          e.key === "Enter" && setInputData("");
        }}
        placeholder="Add task...."
      />
      <button
        className="but"
        onClick={() => {
          if (inputData.trim() !== "") {
            addTodo(inputData);
            setInputData("");
          } else {
            notify();
          }
        }}
      >
        ADD
      </button>
      <ToastContainer
        position="top-center"
        autoClose="3000"
        pauseOnHover="true"
        hideProgressBar="true"
      />
    </header>
  );
}
