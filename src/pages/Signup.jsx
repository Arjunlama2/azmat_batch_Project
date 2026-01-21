import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../constant";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    role: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${BASE_URL}/user/signup`,
        data
      );

      toast.success("Account created successfully!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error(
        err?.response?.data?.message || "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg transition hover:shadow-2xl">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Account
        </h1>

        <form onSubmit={handleSignup} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md outline-none
                         focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md outline-none
                         focus:ring-2 focus:ring-indigo-400"
              placeholder="your username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md outline-none
                           focus:ring-2 focus:ring-indigo-400"
                placeholder="••••••••"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-sm cursor-pointer text-indigo-500"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* Role (Hidden / Fixed) */}
          <input type="hidden" name="role" value="admin" />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-md text-white font-semibold
                       bg-indigo-500 hover:bg-indigo-600
                       transition disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-5 text-gray-500 text-sm text-center">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-500 cursor-pointer hover:underline ml-1"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
