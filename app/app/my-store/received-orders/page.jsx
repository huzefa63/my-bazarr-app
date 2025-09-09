import FilterOptions from "@/app/_components/FilterOptions";
import { Suspense } from "react";
import { BiSolidPackage } from "react-icons/bi";
import SellerOrdersContainer from "@/app/_components/my-store/SellerOrdersContainer";

async function Page() {
    return (
      <div className=" h-full p-5">
        <div className="h-full relative w-full bg-white shadow-sm  py-3 overflow-auto rounded-md">
          <header className="text-3xl flex items-center gap-5 pl-5">
            <BiSolidPackage className="text-yellow-950" /> Recieved Orders
          </header>
          <hr className="text-gray-200 my-5" />
          <div className="px-4 mb-4">
            <Suspense>
              <FilterOptions />
            </Suspense>
          </div>
          <Suspense>
            <SellerOrdersContainer />
          </Suspense>
        </div>
      </div>
    );
}

export default Page
