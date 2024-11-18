import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for contacting us!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 relative">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110"
          title="Close"
        >
          ✕
        </Link>

        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Contact Us
        </h2>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
          We’d love to hear from you! Fill out the form below and we’ll get back
          to you soon.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-xs text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
