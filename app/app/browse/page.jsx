import BrowseResultContainer from "@/app/_components/BrowserResultContainer";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

async function Page() {
  const cookie = await cookies()
  if(!cookie.get('token')) redirect('/auth/home');
    return (
      <div className="flex flex-col items-center h-full">
        <div className="w-1/2 mx-auto px-4 py-8">
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Search for products..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-3 outline-none text-gray-700"
            />
            <button className="bg-blue-600 text-white px-6 py-3 flex items-center gap-2 hover:bg-blue-700 transition">
              <FaSearch size={18} />
              Search
            </button>
          </div>
          <div className="border- w-full mt-4 flex justify-center gap-2 text-gray-800 flex-wrap">
            <p className="px-2 py-1 bg-gray-200 rounded-sm shadow-sm hover:cursor-pointer hover:bg-gray-300 duration-300 transition-all ease-in-out">All</p>
            <p className="px-2 py-1 bg-gray-200 rounded-sm shadow-sm hover:cursor-pointer hover:bg-gray-300 duration-300 transition-all ease-in-out">Electronics</p>
            <p className="px-2 py-1 bg-gray-200 rounded-sm shadow-sm hover:cursor-pointer hover:bg-gray-300 duration-300 transition-all ease-in-out">clothes</p>
          </div>
        </div>
        <div className="w-[95%] px-3 space-y-1">
          <div className="w-full flex justify-between">
            <h1 className="text-3xl font-bold">Search Results</h1>
            <button className="hover:bg-gray-300 p-2 rounded-sm duration-300 transition-all ease-in-out hover:cursor-pointer">
              <IoFilterSharp className="text-3xl" />
            </button>
          </div>

          <p className="text-gray-700">3 Results Found</p>
        </div>
        <BrowseResultContainer />
      </div>
    );
}

export default Page
