"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [value,setValue] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleSearch(e) {
    e.preventDefault();
      const params = new URLSearchParams(searchParams);
      params.set("search", value);
      router.replace(`${pathname}?${params}`,{scroll:false});
  }
  return (
    <form onSubmit={handleSearch} className="flex items-center w-full bg-white rounded-full border border-gray-200 shadow-sm focus-within:shadow-md transition overflow-hidden">
      <input
        onChange={e => {
          if(e.target.value < 1) {
            const params = new URLSearchParams(searchParams);
            params.delete('search');
            router.replace(`${pathname}?${params}`);
          }
          setValue(e.target.value);
        }}
        value={value}
        type="text"
        placeholder="Search for products..."
        className="flex-grow px-5 py-3 bg-transparent text-gray-700 placeholder-gray-400 outline-none"
      />
      <button className="m-1 p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition flex items-center justify-center">
        <FaSearch size={18} className="text-white" />
      </button>
    </form>
  );
}
