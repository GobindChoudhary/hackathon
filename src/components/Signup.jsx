import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const Signup = () => {
  const { darkMode } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      toast.error("Email is already registered!");
      return;
    }

    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    setUser(newUser);

    toast.success("Signup successful!");
    navigate("/");
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-10">
          <h1 className="text-5xl font-bold uppercase tracking-tighter text-center">
            Sign Up
          </h1>

          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <label
                className={`block text-xs uppercase font-semibold mb-1 tracking-wider ${
                  darkMode ? "text-gray-300" : "text-black"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className={`w-full border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:ring-gray-500"
                    : "bg-white border-black text-black focus:ring-black"
                }`}
                required
              />
            </div>

            <div>
              <label
                className={`block text-xs uppercase font-semibold mb-1 tracking-wider ${
                  darkMode ? "text-gray-300" : "text-black"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`w-full border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:ring-gray-500"
                    : "bg-white border-black text-black focus:ring-black"
                }`}
                required
              />
            </div>

            <div>
              <label
                className={`block text-xs uppercase font-semibold mb-1 tracking-wider ${
                  darkMode ? "text-gray-300" : "text-black"
                }`}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className={`w-full border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:ring-gray-500"
                    : "bg-white border-black text-black focus:ring-black"
                }`}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 text-sm uppercase font-bold transition ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              Create Account
            </button>
          </form>

          <p
            className={`text-center text-sm ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className={`font-semibold hover:underline ${
                darkMode ? "text-red-400" : "text-red-500"
              }`}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
