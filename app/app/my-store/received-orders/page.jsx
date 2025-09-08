import FilterOptions from "@/app/_components/FilterOptions";
import SellerOrdersCard from "@/app/_components/my-store/SellerOrdersCard";
import Link from "next/link";
import { Suspense } from "react";
import { BiSolidPackage } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

async function Page() {
     const id = "ORD123456";
     const status = "pending";
     const orderDate = "Sep 7, 2025";
     const productName = "Men’s Casual Shirt";
     const formattedPrice = "₹1,499";
     const customerName = "Rahul Sharma";
     const address = { line1: "123 MG Road", state: "Maharashtra" };
     const coverImage = "https://res.cloudinary.com/dkqsfm61z/image/upload/v1757145166/my-bazarr/products/rcjzz2cbzgtxvvhf2po8.jpg";
     let orders;
     try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/order/getAllSellerOrders`)
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
