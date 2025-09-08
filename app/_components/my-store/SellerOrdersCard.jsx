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
         {<OrderStatus status={status}/>}
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
            <p className="text-gray-900 font-medium">{formattedPrice}</p>
            <p className="text-gray-600 text-xs">
              Customer: <span className="font-semibold">{customerName}</span>
            </p>
            <p className="text-gray-600 text-xs">
              {address.line1} {address.line2}, {address.state}
            </p>
          </div>

          {/* Arrow Button */}
          <button className="absolute right-10 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
            <IoIosArrowForward />
          </button>
        </div>
      </Link>
    );
}

export default SellerOrdersCard
