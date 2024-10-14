import React, { useState } from "react";

const Login = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  const [currentState, setCurrentState] = useState("Login");
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regualr text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          name=""
          placeholder="Name"
          id=""
        />
      )}

      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-800"
        name=""
        placeholder="Email Address"
        id=""
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        name=""
        placeholder="Password"
        id=""
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Password</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign-Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4  active:bg-gray-400">
        {currentState === "Login" ? "Sign-In" : "Register"}
      </button>
    </form>
  );
};

export default Login;
