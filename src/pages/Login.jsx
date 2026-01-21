import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../constant";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate()



    const [data, setData] = useState({
        email: "",
        password: ""
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



    const token = localStorage.getItem("token")

    if (token) {
        return <Navigate to={"/"} replace />
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/user/login`,
                data
            )
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("role", response.data.user.role)
            localStorage.setItem("email", response.data.user.email)
            localStorage.setItem("id", response.data.user._id)

            toast.success("logined in!")
            // navigate("/")
        } catch (err) {
            console.log(err)
        }
    };





    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">

            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg transition hover:shadow-2xl">

                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Welcome Back
                </h1>

                <form onSubmit={handleLogin} className="space-y-5">

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={data.email}
                            name="email"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md outline-none transition
                         focus:ring-2 focus:ring-indigo-400
                         hover:border-indigo-400"
                            placeholder="you@example.com"
                        />
                    </div>

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
                                className="w-full px-4 py-2 border rounded-md outline-none transition
                           focus:ring-2 focus:ring-indigo-400
                           hover:border-indigo-400"
                                placeholder="••••••••"
                            />

                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-sm cursor-pointer text-indigo-500 hover:text-indigo-700"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"

                        disabled={loading}
                        className="w-full py-2 rounded-md text-white font-semibold
                       bg-indigo-500 hover:bg-indigo-600
                       transition disabled:opacity-60"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="mt-5 text-gray-500 text-sm text-center">
                    Don’t have an account?
                    <span className="text-indigo-500 cursor-pointer hover:underline ml-1">
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;