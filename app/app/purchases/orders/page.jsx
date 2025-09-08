import FilterOptions from "@/app/_components/FilterOptions"
import OrderContainer from "@/app/_components/orders/OrderContainer";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";
import { PiPackageFill } from "react-icons/pi";

function Page() {
 
    return (
      <div className="h-full w-full p-5 rounded-md shadow-sm bg-white flex flex-col">
        <header className="text-3xl flex items-center gap-3">
          <PiPackageFill />
          Your Orders
        </header>
        <hr className="text-gray-200 my-5" />
        <FilterOptions />
        <Suspense fallback={<Spinner />}>
          <OrderContainer />
        </Suspense>
      </div>
    );
}

export default Page
