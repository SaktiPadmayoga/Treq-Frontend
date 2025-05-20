import React, { useState } from "react";
import AuthLayouts from "../../components/layouts/authLayouts";
import { useNavigate, Link } from "react-router-dom";
// Import icon 👁️
import { Eye, EyeOff } from "lucide-react"; // atau bisa dari react-icons/fa misalnya

// Dummy login function untuk simulasi
const login = async (email, password) => {
  // Ganti dengan logic API kamu
  if (email === "test@example.com" && password === "password") {
    return Promise.resolve();
  } else if (email === "inactive@example.com") {
    const error = new Error("Akun tidak aktif");
    throw error;
  } else {
    const error = new Error("Email atau password salah");
    throw error;
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await login(email, password); // panggil API login
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
