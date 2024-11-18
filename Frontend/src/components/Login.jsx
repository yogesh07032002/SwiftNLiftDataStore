import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully!");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 relative">
          {/* Close Button */}
          <Link
            to="/"
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110"
            title="Close"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>

          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Welcome Back
          </h2>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
            Login to access your account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Password Field */}
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
              Login
            </button>

            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-500 hover:underline hover:text-purple-700"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
