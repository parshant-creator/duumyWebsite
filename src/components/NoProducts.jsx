import { SearchX } from "lucide-react";

export default function NoProducts() {
  return (
    <div className=" flex justify-center items-center flex-col text-center px-4 py-16">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-orange-100 blur-xl opacity-40"></div>

        <div className="relative w-28 h-28 rounded-full bg-white border-4 border-orange-200 flex items-center justify-center shadow-lg">
          <SearchX size={60} className="text-orange-400" />
        </div>
      </div>
      <h2 className="mt-6 text-2xl font-bold text-gray-800">
        No Products Found
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-md text-sm text-gray-500">
        Try adjusting your search or explore another category.
      </p>
    </div>
  );
}
