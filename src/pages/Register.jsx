import { registerUser , checkPhoneNumber } from "../api/authApi";
import { useState } from "react";
import registerImage from "../assets/images/Online tech talks-pana.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Register() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
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
  });
  }
  const handleContinue = async () => {
    if (!userData.phone.trim()) {
      setErrors({
      phone: "Phone number is required",
    });
    return;
  }
    if(userData.phone.trim().length !== 10){
      setErrors({
        phone: "Phone number must be 10 digits",
      });
            return;
    }
    try{
     await checkPhoneNumber({phone:userData.phone});
          setStep(2);

    }catch(error){
      setErrors({phone:error.response?.data?.message})
    }
  }
  const handleRegister = async () => {
    try {
      const newErrors = {};
      if (!userData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!userData.phone.trim()) {
        newErrors.phone = "Phone is required";
      }
      if (!userData.password) {
        newErrors.password = "password is required";
      }
      if (userData.email && !/\S+@\S+\.\S+/.test(userData.email)) {
        newErrors.email = "Enter a valid email";
      }
      if(Object.keys(newErrors).length > 0){
        setErrors(newErrors);
        return
      }
     await registerUser(userData);
     toast.success("Account created successfully");
     navigate('/login')
    } catch (error) {
      console.log(error)
      console.log(error.message)
       setErrors({phone:error.response?.data?.message});
    }
  };

  return (
    <div className="min-h-[calc(100vh-70px)] flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full mx-4 min-h-[550px] flex shadow-sm bg-white">
        <div className="hidden w-[35%] bg-blue-600 text-white p-10 md:flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold">
              Looks like you're new here!
            </h2>

            <p className="mt-4 text-blue-100">
              Sign up with your mobile number to get started
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
        <div className="w-full md:w-[65%] flex flex-col gap-8  p-10">
          {step === 1 && (
            <>
            <input
              type="tel"
              name="phone"
              onChange={handleInput}
              value={userData.phone}
              placeholder="Enter your mobile number"
              className="w-full outline-0 border-b border-blue-600 py-2"
            />
            {errors.phone &&(
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
            </>
          )}
          {step === 2 && (
            <>
              <input
                type="text"
                name="name"
                onChange={handleInput}
                value={userData.name}
                placeholder="Enter your Name"
                className="w-full outline-0 border-b border-blue-600 py-2"
              />
               {errors.name &&(
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
              <input
                type="text"
                name="email"
                onChange={handleInput}
                value={userData.email}
                placeholder="Enter your email"
                className="w-full outline-0 border-b border-blue-600 py-2"
              />
               {errors.email &&(
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={userData.password}
                placeholder="create password"
                className="w-full outline-0 border-b border-blue-600 py-2"
              />
               {errors.password &&(
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
            </>
          )}

          <p className="text-gray-500 text-xs ">
            By continuing, you agree to Flipkart's{" "}
            <span className="text-blue-600">Terms of Use</span> and{" "}
            <span className="text-blue-600">Privacy Policy.</span>
          </p>
          <button
            onClick={step === 1 ? handleContinue: handleRegister}
            className="w-full py-3 font-medium px-4 bg-orange-500 text-white"
          >
            {step === 1 ? "continue" : "create Account"}
          </button>
          <button className="w-full text-blue-600 shadow py-3 font-medium">
            Existing User?Log in
          </button>
        </div>
      </div>
    </div>
  );
}
