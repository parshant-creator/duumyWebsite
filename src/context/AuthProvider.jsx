import { useState, useEffect, createContext } from "react";
import { getUserProfile } from "../api/authApi";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Profile API calling...");
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();
        console.log("Profile response:", response.user);
        setUser(response.user);
      } catch (error) {
        console.log(error.response?.data?.message);
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
