import React, { useState } from "react";
import Header from "./Header";
import BackgroundImage from "../utils/Background-image.jpg";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BackgroundImage} alt="Background-img" />
      </div>
      <form
        className="flex flex-col absolute my-52 w-4/12 bg-black mx-auto left-0 right-0 text-white px-24 py-10 gap-5 bg-opacity-80"
        action=""
      >
        <p className="p-2 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            type="name"
            placeholder="Full Name"
            name=""
            id="name"
            className="p-2 m-2 bg-gray-500"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone Number"
          name=""
          id="email"
          className="p-2 m-2 bg-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          name=""
          id=""
          className="p-2 m-2 bg-gray-500"
        />
        <button className="text-white p-2 m-2 bg-red-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Netflix User? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
