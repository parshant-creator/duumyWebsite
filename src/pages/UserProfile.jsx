import { useEffect, useState } from "react";
import { getUserProfile } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { Power } from "lucide-react";

export default function UserProfile() {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProfile();
  }, [navigate]);
  const fetchProfile = async () => {
    try {
      const response = await getUserProfile();
      setUser(response.user);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          setUser(null);
          navigate("/login", { replace: true });
        }
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <div className="min-h-screen p-10  bg-gray-100">
      <div className="max-w-md mx-auto mt-10 p-6 text-center">
        <h2 className="md:text-3xl text-xl">loading... </h2>
      </div>
    </div>
  if (!user) {
    return null;
  }
  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};
  return (
    <div className="min-h-screen p-10  bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4   rounded-xl">
        <div className="w-full md:w-[30%] shadow-lg p-6 flex flex-col gap-4 bg-white">
          <p>Hello</p>
          <p>
            <strong>{user.name}</strong>
          </p>
          <button className="flex items-center gap-2 mt-auto" onClick={handleLogout}>
            <Power />LogOut
          </button>
        </div>
        <div className="w-full md:w-[70%] shadow-lg p-6 flex flex-col bg-white  gap-4">
          <strong>Email Address</strong>
          <p className="text-gray-700 border border-gray-400 bg-gray-200 p-2">{user.email || "Not added"}</p>
         
            <strong>Mobile Number</strong> <p className="text-gray-700 border border-gray-400 bg-gray-200 p-2">
            {user.phone}
          </p>
         
            <strong>Role : </strong> <p className="text-gray-700 border border-gray-400 bg-gray-200 p-2">
            {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}
