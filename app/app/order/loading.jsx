import MyOrderItemCard from "@/app/_components/my_orders/MyOrderItemCard";
import MyOrderSummary from "@/app/_components/my_orders/MyOrderSummary";
import BackButton from "@/app/_components/BackButton";
import Instructions from "@/app/_components/orders/Instructions";
import { BiSolidContact } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

async function Loading() {
  return (
    <div className=" w-full h-full bg-gray-100 p-5 relative overflow-auto">
      <div className="w-full h-fit lg:flex space-y-5 lg:space-y-0">
        <div className="lg:w-[65%]">
          <div className="mb-2">
            <BackButton />
          </div>
          <div className="space-y-3 w-50">
            <header className=" animate-pulse font-bold bg-white text-white w-full h-12">
              Order ID: {"a"}
            </header>
            <p className="text-sm animate-pulse text-white bg-white tracking-wide">
              ordered on {"a"}
            </p>
          </div>
          <MyOrderItemCard
            deliveryExpected={new Date()}
            productName={"a"}
            totalAmount={"a"}
            coverImage={"a"}
            status={"a"}
            skeleton
          />
          <MyOrderSummary
            subtotal={"a"}
            discount={"a"}
            shipping={"a"}
            totalAmount={"a"}
            skeleton
          />
        </div>

        <div className="lg:p-3 lg:w-[35%] space-y-4">
          <Instructions
            instructions={"a"}
            status={"a"}
            orderId={"a"}
            customerId={"a"}
            skeleton
          />

          <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
            <header className="flex items-center gap-2 text-xl font-bold text-gray-100 bg-gray-100 w-3/4 animate-pulse">
              <BiSolidContact className="" /> Contact Information
            </header>
            <div className="space-y-1">
              <p className="text-sm text-gray-100 bg-gray-100 w-1/3 animate-pulse">{"a"}</p>
              <p className="text-sm text-gray-100 bg-gray-100 w-1/3 animate-pulse">{"a"}</p>
            </div>
          </div>

          <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
            <header className="flex items-center gap-2 text-xl font-bold text-gray-100 bg-gray-100 w-3/4">
              <ImLocation2 /> Shipping address
            </header>
            <div className="space-y-1">
              <p className="text-sm text-gray-100 bg-gray-100 w-1/2 animate-pulse">{"a"}</p>
              <p className="text-sm text-gray-100 bg-gray-100 w-1/3 animate-pulse">{"a"}</p>
              <p className="text-sm text-gray-100 bg-gray-100 w-1/4 animate-pulse">{"a"}</p>
              <p className="text-sm text-gray-100 bg-gray-100 w-1/2 animate-pulse">{"a"}</p>
              <p className="text-sm text-gray-100 bg-gray-100 w-1/3 animate-pulse">india</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
