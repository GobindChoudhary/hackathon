import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const { darkMode } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // 🔒 Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!matchedUser) {
      toast.error("Invalid email or password!");
      return;
    }

    setUser(matchedUser);
    toast.success("Login successful!");
    navigate("/");
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-full max-w-md space-y-10">
          <h1 className="text-5xl font-bold uppercase tracking-tighter text-center">
            Login
          </h1>

          {/* ✅ Login Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
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
                placeholder="Enter your password"
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
              Sign In
            </button>
          </form>

          <p
            className={`text-center text-sm ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className={`font-semibold hover:underline ${
                darkMode ? "text-red-400" : "text-red-500"
              }`}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
