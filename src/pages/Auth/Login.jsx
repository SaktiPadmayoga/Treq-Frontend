import React, { useState, useContext } from "react";
import AuthLayouts from "../../components/layouts/authLayouts";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; 
import { validateEmail, validatePassword } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import apiPath from "../../utils/apiPath";
import {UserContext} from "../../context/userContext";
// Dummy login function untuk simulasi


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {updateUser} = useContext(UserContext);
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and contain at least one number");
      return;
    }
  
    setError("");
    setLoading(true);
    try {
      const response = await axiosInstance.post(apiPath.auth.login, {
        email,
        password,
      });
  
      const { token, success, message } = response.data;
  
      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data); // Assuming updateUser is defined in your context
      } else {
        setError("Invalid email or password");
        return;
      }
  
      if (success) {
        navigate("/dashboard");
      } else {
        setError(message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "An error occurred while logging in. Please try again.");
    }
    setLoading(false);
  };
  

  return (
    <div>
      <AuthLayouts>
        <hr className='w-full text-sky-900/50 mb-8'/>
        <div className="text-md text-center mb-6">Please login to continue</div>
        <div className="w-full flex flex-col justify-center max-w-lg mx-auto">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded mb-4 font-medium text-center w-full max-w-sm">
              {error === "Akun belum terdaftar"
                ? "Akun Anda belum terdafrta. Silakan daftar terlebih dahulu."
                : error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full text-sm px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-sky-900"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full text-sm px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-sky-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="text-right text-xs mt-1">
                <Link to="/forgot-password" className="text-sky-900 hover:underline">
                  Forget Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full text-sm bg-gradient-to-r from-sky-900 via-sky-950 to-black text-white py-2 mt-6 rounded-xl hover:opacity-90 transition"

            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="text-xs text-center mt-10">
            Doesn't have an account?{" "}
            <Link to="/register" className="text-sky-900 font-semibold hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </AuthLayouts>
    </div>
  );
};

export default Login;
