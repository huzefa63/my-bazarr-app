import { format } from "date-fns";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import OrderStatus from "./OrderStatus";

function OrderItem({status,coverImage,productName,totalAmount,deliveryExpected,id}) {
    const deliveryData = format(new Date(deliveryExpected),'dd MMMM, yyyy')
    const formattedPrice = new Intl.NumberFormat('en-IN',{
      currency:'INR',
      style:'currency'
    }).format(totalAmount);
    return (
      <Link href={`/app/order/${id}`}  className="smooth-transition hover:bg-gray-100 w-full relative  border border-gray-200 rounded-md p-4 flex flex-col gap-5 overflow-hidde">
        <div className="flex gap-4 items-center">
          {<OrderStatus status={status}/>}
          <span className="text-gray-400">|</span>
          <p className="text-sm text-gray-600">{deliveryData}</p>
        </div>
        <div className="flex gap-5 ">
          <div className="min-w-20 max-w-20  rounded-md  overflow-hidden">
            <img src={coverImage} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-1 text-sm h-fit">
            <p className="font-bold text-red-800">Order ID: {id}</p>
            <p className="line-clamp-1">{productName}</p>
            <p>{formattedPrice}</p>
          </div>
          <button className="absolute hidden lg:block right-10 top-1/2 -translate-y-1/2 text-2xl">
            <IoIosArrowForward />
          </button>
        </div>
      </Link>
    );
}

export default OrderItem
