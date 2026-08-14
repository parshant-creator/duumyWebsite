import { useNavigate, Link, useLocation } from "react-router-dom";
import { getUserProfile, loginUser } from "../api/authApi";
import registerImage from "../assets/images/Online tech talks-pana.png";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation()
  const {setUser} = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors({
    ...errors,
    [name]: "",
    general: "",
  });
  };
  const userLogin = async () => {
    try {
      const newErrors = {};
     
       if (!userData.phone.trim()) {
        newErrors.phone = "Phone is required";
      }
      if (!userData.password) {
      newErrors.password = "Password is required";
      }
      
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      const response = await loginUser(userData);
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful");

      const from = location.state?.from || "/";
      navigate(from)
      
      const profileResponse = await getUserProfile();
      setUser(profileResponse.user);
      console.log(response);
    } catch (error) {
      setErrors({
        general: error.response?.data?.message,
      });
    }
  };
  return (

    <div className="min-h-[calc(100vh-70px)] bg-gray-100 flex justify-center items-center">
      
      <div className="max-w-4xl w-full mx-4  shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row bg-white min-h-[550px]">
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
        <div className="md:w-[65%] w-full flex flex-col  px-6 py-8 md:p-10 ">
           <Link
    to="/"
    className="flex items-center justify-center md:justify-start gap-2 mb-8"
  >
    <span className="text-3xl">🛍️</span>
    <span className="text-2xl font-bold">
      Shop<span className="text-orange-500">Kart</span>
    </span>
  </Link>
          <div className="md:hidden mb-8">
            <p className="text-gray-500 text-md font-semibold">Login for the best shopping experience</p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              onChange={handleInput}
              value={userData.phone}
              name="phone"
              type="tel"
              placeholder="Enter your mobile number"
              className="outline-none text-sm py-3 w-full border-blue-600 border-b"
            />
            {errors.phone && (
  <p className="text-red-500 text-xs mt-1">
    {errors.phone}
  </p>
)}
            <input
              onChange={handleInput}
              value={userData.password}
              name="password"
              type="password"
              placeholder="Enter your password"
              className="outline-none text-sm py-3 w-full border-blue-600 border-b"
            />
            {errors.password && (
  <p className="text-red-500 text-xs mt-1">
    {errors.phone}
  </p>
)}
            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}
            <p className="text-gray-500 text-xs ">
              By continuing, you agree to Flipkart's{" "}
              <span className="text-blue-600">Terms of Use</span> and{" "}
              <span className="text-blue-600">Privacy Policy.</span>
            </p>
            <button
              className="w-full py-3 font-medium rounded-md text-white transition bg-orange-500  hover:bg-orange-600"
              onClick={userLogin}
            >
              Log in
            </button>
          </div>
          <div className="text-center mt-8 text-sm">
            New to ShopKart?

<Link
  to="/register"
  className="ml-1 text-blue-600 font-semibold hover:underline"
>
  Create an Account
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
