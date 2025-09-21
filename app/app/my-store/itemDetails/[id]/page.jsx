import FilterOptions from "@/app/_components/FilterOptions";
import ItemDetails from "@/app/_components/my-store/itemDetails"
import ItemOrders from "@/app/_components/my-store/ItemOrders";
import MetricCardContainer from "@/app/_components/my-store/MetricCardContainer";
import Spinner from "@/app/_components/Spinner";
import Link from "next/link";
import { Suspense } from "react";

async function Page({params,searchParams}) {
    const param = await params;
    const s = await searchParams;
    const productId = param.id;

    return (
      <div className="h-full w-full overflow-auto bg-gray-50 p-4 space-y-6 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/app/my-store/items" className="text-2xl opacity-70">
              ←
            </Link>
            <div>
              <h1 className="text-xl font-bold">Product Details</h1>
              <p className="text-gray-500 text-sm line-clamp-2">
                {s.name}
              </p>
            </div>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-xl shadow">
            Edit
          </button>
        </div>

        {/* Metrics */}
        <div className=" lg:h-22 h-46 relative">
          <Suspense fallback={<Spinner />}>
            <MetricCardContainer productId={productId}/>
          </Suspense>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-2xl shadow p-4 space-y-4 relative flex-1">
          <h2 className="text-lg font-semibold">Orders</h2>
          <FilterOptions />
          <Suspense fallback={<Spinner />} key={s?.filter}>
            <ItemOrders productId={productId} filter={s}/>
          </Suspense>
        </div>
      </div>
    );
}

export default Page
