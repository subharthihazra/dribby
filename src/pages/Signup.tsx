import React from "react";
import signup_img from "../assets/signup_img.png";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../components/HeaderLogo";

function Signup() {
  return (
    <div className=" h-full flex flex-col md:flex-row ">
      <div className="md:h-full md:w-1/3 bg-[#faeccf] flex flex-col p-6 gap-5">
        <HeaderLogo color="#6a530090" />
        <div className="flex md:flex-col gap-5">
          <div className=" w-3/4 md:w-full text-xl sm:text-3xl font-semibold text-[#6a5300] place-content-center">
            Welcome to the Ocean of Creative Folks.
          </div>
          <div className=" w-1/4 md:w-full flex-1">
            <img src={signup_img}></img>
          </div>
        </div>
      </div>
      <div className="md:h-full md:w-2/3">
        <SignupForm />
      </div>
    </div>
  );
}

function SignupForm() {
  const navigate = useNavigate();
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    navigate("/profile");
  }

  return (
    <div className="max-w-md mx-auto p-8 h-full flex flex-col justify-center">
      <h1 className="text-2xl font-semibold mb-4">Sign up to Dribbble</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-md font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <Input type="text" name="fullname" id="name" placeholder="John doe" />
        </div>
        <div className="mb-4">
          <label
            className="block text-md font-medium text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="john_doe"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-md font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-md font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="6+ characters"
          />
        </div>
        <div className="mb-4 flex items-start">
          <input
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded w-10 mt-1"
            id="terms"
            type="checkbox"
          />
          <label className="ml-2 block text-md text-gray-900" htmlFor="terms">
            Creating an account means you're okay with our{" "}
            <a className="text-indigo-600 hover:text-indigo-500" href="#">
              Terms of Service
            </a>
            ,{" "}
            <a className="text-indigo-600 hover:text-indigo-500" href="#">
              Privacy Policy
            </a>
            , and our default{" "}
            <a className="text-indigo-600 hover:text-indigo-500" href="#">
              Notification Settings
            </a>
            .
          </label>
        </div>
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium bg-dribby-primary-color text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dribby-primary-color"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

function Input({
  id,
  placeholder,
  type,
  name,
}: {
  id: string;
  placeholder: string;
  type: string;
  name: string;
}) {
  return (
    <input
      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-dribby-primary-color focus:border-slate-800 sm:text-md"
      id={id}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}

export default Signup;
