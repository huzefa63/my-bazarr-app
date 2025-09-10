import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center w-full bg-white rounded-full border border-gray-200 shadow-sm focus-within:shadow-md transition overflow-hidden">
      <input
        type="text"
        placeholder="Search for products..."
        className="flex-grow px-5 py-3 bg-transparent text-gray-700 placeholder-gray-400 outline-none"
      />
      <button className="m-1 p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition flex items-center justify-center">
        <FaSearch size={18} className="text-white" />
      </button>
    </div>
  );
}
