import React, { useState } from "react";
import AuthLayouts from "../../components/layouts/authLayouts";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { validateEmail, validatePassword } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import axiosInstance from "../../utils/axiosInstance";
import apiPath from "../../utils/apiPath";
import uploadImage from "../../utils/uploadImage";

const Register = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (username.trim() === "") {
      setError("Username is required");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and contain at least one number");
      return;
    }

    setError("");
    setLoading(true);

    try {
      let profileImageUrl = '';

      // Upload image first if exists
      if (profilePic) {
        console.log("Uploading profile image...");
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
        console.log("Image uploaded successfully:", profileImageUrl);
      }

      // Register user with image URL
      console.log("Registering user...");
      const response = await axiosInstance.post(apiPath.auth.register, {
        name: username,
        email,
        password,
        profileImageUrl // Send the URL string, not the file
      });

      const { token, success, message } = response.data;

      if (success && token) {
        localStorage.setItem("token", token);
        console.log("Registration successful");
        navigate("/login");
      } else {
        setError(message || "Registration failed");
      }

    } catch (err) {
      console.error("Registration error:", err);
      
      // More specific error handling
      if (err.response) {
        // Server responded with error status
        const errorMessage = err.response.data?.message || "Registration failed";
        setError(errorMessage);
        console.error("Server error:", err.response.data);
      } else if (err.request) {
        // Request was made but no response
        setError("Network error. Please check your connection.");
      } else {
        // Something else happened
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AuthLayouts>
        <hr className="w-full text-sky-900/50 mb-8" />
        <div className="text-md text-center mb-6">Create your account</div>
        <div className="w-full flex flex-col justify-center max-w-lg mx-auto">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded mb-4 font-medium text-center w-full max-w-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
            
            <div>
              <label className="block text-gray-700 text-sm mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full text-sm px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-sky-900"
              />
            </div>

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
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full text-sm bg-gradient-to-r from-sky-900 via-sky-950 to-black text-white py-2 mt-6 rounded-xl hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          <div className="text-xs text-center mt-10">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-900 font-semibold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </AuthLayouts>
    </div>
  );
};

export default Register;