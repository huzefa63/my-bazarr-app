import FilterOptions from "@/app/_components/FilterOptions";
import MyProductContainer from "@/app/_components/my_product/MyProductContainer";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";
import { BiSolidPackage } from "react-icons/bi";

function page() {
  return (
    <div className="h-full overflow-auto p-5 flex">
      <div className="w-full bg-white p-3 overflow-auto rounded-sm">
        <header className="text-3xl flex items-center gap-5 pl-5">
          <BiSolidPackage className="text-yellow-950" /> My Products
        </header>
        <hr className="text-gray-200 my-5" />
        <div className="px-4 mb-4">
          <Suspense>
            <FilterOptions allFilters={false} />
          </Suspense>
        </div>
        <Suspense fallback={"loading"}>
          <MyProductContainer />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
