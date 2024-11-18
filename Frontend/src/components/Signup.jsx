import { Link, useLocation, useNavigate } from "react-router-dom";

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully!");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 relative">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110"
          title="Close"
        >
          ✕
        </Link>

        <h2 className="text-2xl font-extrabold text-center text-gray-800 dark:text-white">
          Sign Up
        </h2>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
          Create your account to get started!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && (
              <span className="text-xs text-red-500">
                {errors.fullname.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-purple-500 hover:underline hover:text-purple-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
