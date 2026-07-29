import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-10  md:px-12 lg:px-20">
      <div className="flex flex-col gap-8">
        <div className="font-bold text-2xl">🛍 ShopKart</div>
        <div className="flex flex-wrap gap-6 text-gray-300">
          <span className="cursor-pointer hover:text-white">About </span>
          <span className="cursor-pointer hover:text-white">About </span>
          <span className="cursor-pointer hover:text-white">Support </span>
          <span className="cursor-pointer hover:text-white">Contact</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 bg-white rounded-md px-4 py-2 text-black outline-none  placeholder:text-gray-500 border border-gray-300"
          />
          <button className="rounded-md bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700">
            Subscribe
          </button>
        </div>
        <div className="flex text-2xl gap-5">
          <FaFacebook className="cursor-pointer hover:text-blue-500" />
          <FaSquareInstagram className="cursor-pointer hover:text-blue-500" />
          <IoLogoLinkedin className="cursor-pointer hover:text-blue-500" />
        </div>
        <div className="border-t border-gray-700 pt-5 flex flex-col sm:flex-row justify-between gap-3 text-sm text-gray-400">
          <p>© 2026 ShopKart. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white"> Privacy </span>
            <span className="cursor-pointer hover:text-white"> Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
