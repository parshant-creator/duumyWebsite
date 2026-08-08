import { useState, useEffect, createContext } from "react";
import { getUserProfile } from "../api/authApi";
import {jwtDecode} from "jwt-decode";

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
    const checkToken = async () => {
      try {
        const decodedToken = jwtDecode(token);
        const expiryTime = decodedToken.exp * 1000;
        const remainingTime = expiryTime - Date.now();
        if (remainingTime <= 0) {
          localStorage.removeItem("token");
          setUser(null);
          setLoading(false);
          return;
        }
        const profileResponse = await getUserProfile();
        setUser(profileResponse.user);
        setTimeout(() => {
          localStorage.removeItem("token");
          setUser(null);
        }, remainingTime);
      } catch (error) {
        console.log("Error decoding token:", error);
        localStorage.removeItem("token");
        setUser(null);
        setLoading(false);
        return;
      } finally {
        setLoading(false);
      }
    };
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
