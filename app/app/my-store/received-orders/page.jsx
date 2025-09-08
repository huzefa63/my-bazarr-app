import FilterOptions from "@/app/_components/FilterOptions";
import Link from "next/link";
import { Suspense } from "react";
import { BiSolidPackage } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

function Page() {
     const id = "ORD123456";
     const status = "pending";
     const orderDate = "Sep 7, 2025";
     const productName = "Men’s Casual Shirt";
     const formattedPrice = "₹1,499";
     const customerName = "Rahul Sharma";
     const address = { line1: "123 MG Road", state: "Maharashtra" };
     const coverImage =
       "https://res.cloudinary.com/dkqsfm61z/image/upload/v1757145166/my-bazarr/products/rcjzz2cbzgtxvvhf2po8.jpg";
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
              {/* {products.map((el) => (
                <MyProductItem
                  key={el._id}
                  name={el.name}
                  price={el.price}
                  description={el.description}
                  id={el._id}
                  image={el.coverImage}
                />
              ))} */}
              <Link
                href={`/app/seller/orders/${id}`}
                className="smooth-transition hover:bg-gray-100 w-full relative border border-gray-200 rounded-md p-4 flex flex-col gap-5 overflow-hidden"
              >
                {/* Status + Date */}
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2 bg-blue-100 w-fit px-3 rounded-full text-blue-500 text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <p className="capitalize">{status}</p>
                  </div>
                  <span className="text-gray-400">|</span>
                  <p className="text-sm text-gray-600">Placed on {orderDate}</p>
                </div>

                {/* Product + Customer Info */}
                <div className="flex gap-5">
                  {/* Product Image */}
                  <div className="w-30  rounded-md overflow-hidden">
                    <img
                      src={coverImage}
                      alt={productName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Order Details */}
                  <div className="space-y-1 text-sm h-fit flex-1">
                    <p className="font-bold text-gray-800">Order ID: {id}</p>
                    <p className="text-gray-700">{productName}</p>
                    <p className="text-gray-900 font-medium">
                      {formattedPrice}
                    </p>
                    <p className="text-gray-600 text-xs">
                      Customer:{" "}
                      <span className="font-semibold">{customerName}</span>
                    </p>
                    <p className="text-gray-600 text-xs">
                      {address.line1}, {address.state}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <button className="absolute right-10 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
                    <IoIosArrowForward />
                  </button>
                </div>
              </Link>
            </div>
          </Suspense>
        </div>
      </div>
    );
}

export default Page
