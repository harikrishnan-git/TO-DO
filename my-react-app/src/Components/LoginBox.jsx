import React from "react";
import LoginInner from "./LoginInner";
import LoginBg from "./LoginBg";

export default function LoginBox() {
  return (
    <div className="grow bg-white flex rounded-lg justify-center items-center h-fit w-fit m-auto">
      <LoginInner />
      <LoginBg />
    </div>
  );
}
