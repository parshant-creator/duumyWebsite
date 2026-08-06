import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import registerImage from "../assets/images/Online tech talks-pana.png";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    console.log(e.target);
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const userLogin = async () => {
    try {
      const newErrors = {};
      if (!userData.phone.trim()) {
        newErrors({
          phone: "Phone number is required",
        });
      }
      if (!userData.password) {
        newErrors({
          password: "password is required",
        });
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      const response = await loginUser(userData);
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful");

      navigate("/");
      console.log(response);
    } catch (error) {
      setErrors({
        general: error.response?.data?.message,
      });
    }
  };
  return (
    <div className="min-h-[calc(100vh-70px)] bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl w-full mx-4 flex shadow-sm bg-white min-h-[550px]">
        <div className="hidden md:flex flex-col justify-between w-[35%] bg-blue-600 text-white p-10">
          <div>
            <h2 className="text-3xl font-semibold">Login</h2>

            <p className="mt-4 text-blue-100">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>

          <div className="mt-auto flex justify-center pb-4">
            <img
              src={registerImage}
              alt="Register"
              className="w-48 object-contain"
            />
          </div>
        </div>
        <div className="md:w-[65%] flex flex-col justify-between p-10 ">
          <div className="flex flex-col gap-8">
            <input
              onChange={handleInput}
              value={userData.phone}
              name="phone"
              type="tel"
              placeholder="Enter your mobile number"
              className="outline-none py-2 w-full border-blue-600 border-b"
            />
            <input
              onChange={handleInput}
              value={userData.password}
              name="password"
              type="password"
              placeholder="Enter your password"
              className="outline-none py-2 w-full border-blue-600 border-b"
            />
            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}
            <p className="text-gray-500 text-xs ">
              By continuing, you agree to Flipkart's{" "}
              <span className="text-blue-600">Terms of Use</span> and{" "}
              <span className="text-blue-600">Privacy Policy.</span>
            </p>
            <button
              className="w-full py-3 font-medium px-4 bg-orange-500 text-white"
              onClick={userLogin}
            >
              Log in
            </button>
          </div>
          <div className="text-center text-xs font-medium text-blue-600">
            <Link to="/register">New to ShopKart? Create an Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
