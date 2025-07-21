import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-10">
        {/* Heading */}
        <h1 className="text-5xl font-bold uppercase tracking-tighter text-center">
          Login
        </h1>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-xs uppercase font-semibold mb-1 tracking-wider">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs uppercase font-semibold mb-1 tracking-wider">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white text-sm uppercase font-bold hover:bg-neutral-800 transition"
          >
            Sign In
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-red-500 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
