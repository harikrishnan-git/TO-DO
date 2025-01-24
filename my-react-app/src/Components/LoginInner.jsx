import React from "react";

export default function LoginInner() {
  return (
    <div className="flex flex-col p-10 text-red-400">
      <h1 className="mb-16 mx-auto font-bold text-3xl lalezar-regular">
        LOGIN
      </h1>
      <form action="" className="flex flex-col">
        <label id="username" htmlFor="" className="">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="input bg-white border-black grow focus:border-slate-600 rounded-md mb-4 "
          placeholder="eg:john739"
        />
        <label id="password" htmlFor="" className="">
          Password
        </label>
        <input
          type="text"
          name=""
          id="password"
          className="bg-white grow border-black focus:border-slate-600 input rounded-md mb-10"
          placeholder="Enter Password..."
        />
        <input
          type="button"
          value="Submit"
          className="rounded-xl btn btn-error text-white"
        />
        <p className="text-black text-sm">
          Don’t have an account?
          <a href="" className="text-blue-500 hover:text-blue-400 link">
            Click here to register
          </a>
        </p>
      </form>
    </div>
  );
}
