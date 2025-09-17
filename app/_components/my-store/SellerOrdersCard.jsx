import formatCurrency from "@/helpers/formatCurrency";
import { format } from "date-fns";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import OrderStatus from "../orders/OrderStatus";

function SellerOrdersCard({status,createdAt,coverImage,productName,id,totalAmount,customerName,address}) {
    const formattedPrice = formatCurrency(totalAmount);
    const orderDate = format(new Date(createdAt),'dd MMMM, yyyy')
    return (
      <Link
        href={`/app/order/${id}`}
        className="smooth-transition hover:bg-gray-100 w-full relative border border-gray-200 rounded-md p-4 flex flex-col gap-5 overflow-hidden"
      >
        {/* Status + Date */}
        <div className="flex gap-4 items-center">
          {<OrderStatus status={status} />}
          <span className="text-gray-400">|</span>
          <p className="lg:text-sm text-xs text-gray-600">
            Placed on {orderDate}
          </p>
        </div>

        {/* Product + Customer Info */}
        <div className="flex gap-5">
          {/* Product Image */}
          <div className="lg:min-w-30 lg:min-h-30 lg:max-h-30 min-w-20 max-w-20 lg:max-w-30 min-h-20 max-h-20 rounded-md overflow-hidden">
            <img
              src={coverImage}
              alt={productName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Order Details */}
          <div className="space-y-1 text-sm h-fi flex-1 flex flex-col justify-center ">
            <p className="font-bold text-xs lg:text-l text-red-700 lg:block hidden">
              order ID: {id}
            </p>
            <p className="font-bold text-xs lg:text-l text-red-700 lg:hidden line-clamp-1">
              orderID:<span className="ml-1">{id}</span>
            </p>
            <p className="text-gray-700 line-clamp-1">
              TAPUJI Dancing Cactus Repeats What You Say,Electronic Plush Toy
              with Lighting,Singing Cactus Recording and Repeat Your Words for
              Education Toys (Green)
            </p>
            <p className="text-gray-900 font-medium">{formattedPrice}</p>
            <p className="text-gray-600 text-xs line-clamp-1">
              Customer:
              <span className="font-semibold ml-1">{customerName}</span>
            </p>
            <p className="text-gray-600 text-xs line-clamp-1 lg:block hidden">
              address: {address.line1} {address.line2}, {address.state}
            </p>
          </div>

          {/* Arrow Button */}
          <button className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
            <IoIosArrowForward />
          </button>
        </div>
      </Link>
    );
}

export default SellerOrdersCard
