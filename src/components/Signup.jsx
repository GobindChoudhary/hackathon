import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-10">
        {/* Heading */}
        <h1 className="text-5xl font-bold uppercase tracking-tighter text-center">
          Sign Up
        </h1>

        {/* Signup Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-xs uppercase font-semibold mb-1 tracking-wider">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white text-sm uppercase font-bold hover:bg-neutral-800 transition"
          >
            Create Account
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
