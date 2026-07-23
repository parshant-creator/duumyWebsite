import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };
  const discoverItems = [
    "mobiles",
    "shoes",
    "t shirts",
    "laptops",
    "watches",
    "tv",
    "saree",
    "headphones",
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4 gap-3 bg-white mb-6">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="text-gray-600 cursor-pointer"
          size={32}
          color="gray"
        />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
          autoFocus
          placeholder="Search for Products, Brands and More"
          className="flex-1 py-2 px-2 outline-none text-gray-700"
        />
      </div>
      <div className="bg-white p-4">
        <h3 className="text-gray-600 mb-4">Discover More</h3>

        <div className="flex flex-wrap gap-2">
          {discoverItems.map((item) => (
            <button
              key={item}
              onClick={() => navigate(`/search?q=${item}`)}
              className="px-3 py-2 border rounded text-sm text-blue-600"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
