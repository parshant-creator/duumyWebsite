import registerImage from "../assets/images/Online tech talks-pana.png";
export default function Register() {
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
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full outline-0 border-b border-blue-600 py-2"
          />
          <p className="text-gray-500 text-xs ">
            By continuing, you agree to Flipkart's <span className="text-blue-600">Terms of Use</span> and  <span className="text-blue-600">Privacy
            Policy.</span>
          </p>
          <button className="w-full py-3 font-medium px-4 bg-orange-500 text-white">
            continue
          </button>
          <button className="w-full text-blue-600 shadow py-3 font-medium">
            Existing User?Log in
          </button>
        </div>
      </div>
    </div>
  );
}
