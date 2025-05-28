// src/contexts/UserContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import apiPath from "../utils/apiPath";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ambil user dari localStorage saat awal render
  useEffect(() => {
    if(user) return;


    const accsessToken = localStorage.getItem("token");
    if (!accsessToken) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
        try {
            const response = await axiosInstance.get(apiPath.auth.profile);
            setUser(response.data);
        } catch (error) {
            console.error("Failed to parse user data from localStorage", error);
            clearUser();
        } finally {
            setLoading(false);
        }
    };

    fetchUser();

  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token );
    setLoading(false);
  };

    const clearUser = () => {
        setUser(null);
        localStorage.removeItem("token");
        setLoading(false);
    };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
