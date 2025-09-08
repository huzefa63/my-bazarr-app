import FilterOptions from "@/app/_components/FilterOptions";
import SellerOrdersCard from "@/app/_components/my-store/SellerOrdersCard";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import { BiSolidPackage } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

async function Page() {
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
     let orders;
     try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/order/getAllSellerOrders`,{
          method:'GET',
          headers:{
            Cookie:`token=${token}`,
          }
        })
        const resJson = await res.json();
        orders = resJson.orders;
     }catch(err){
        console.log(err);
        orders = [];
     }
    return (
      <div className="w-full h-full p-5">
        <div className="h-full w-[90%] bg-white shadow-sm  py-3 overflow-auto rounded-md">
          <header className="text-3xl flex items-center gap-5 pl-5">
            <BiSolidPackage className="text-yellow-950" /> Recieved Orders
          </header>
          <hr className="text-gray-200 my-5" />
          <div className="px-4 mb-4">
            <FilterOptions />
          </div>
          <Suspense fallback={<h1>loading</h1>}>
            <div className="w-full h-full">
              {orders.map((el) => (
                <SellerOrdersCard
                  key={el._id}
                  productName={el.productName}
                  totalAmount={el.totalAmount}
                  status={el.status}
                  id={el._id}
                  coverImage={el.coverImage}
                  createdAt={el.createdAt}
                  customerName={el.customerName}
                  address={el.address}
                />
              ))}
             
            </div>
          </Suspense>
        </div>
      </div>
    );
}

export default Page
