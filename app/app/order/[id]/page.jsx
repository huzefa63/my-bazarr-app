import MyOrderItemCard from "@/app/_components/my_orders/MyOrderItemCard";
import MyOrderSummary from "@/app/_components/my_orders/MyOrderSummary";

function Page() {
    
    return (
      <div className="flex w-full h-full bg-gray-100 p-5 ">
        <div className="w-[65%]">
          <div className="space-y-3">
            <header className="text-2xl font-bold">Order ID: 334902445</header>
            <p className="text-sm text-gray-600 tracking-wide">
              ordered on jan 8, 2024 at 9:50 pm
            </p>
          </div>
          <MyOrderItemCard />
          <MyOrderSummary />
        </div>

        <div className="p-3 w-[35%] space-y-4">
          <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
            <header className="text-xl font-bold text-gray-700">
              Instructions
            </header>
            <p className="text-sm text-gray-700">
              drop the courier at my neighbor and take money
            </p>
          </div>

          <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
            <header className="text-xl font-bold text-gray-700">
              Contact Information
            </header>
            <div className="space-y-1">
              <p className="text-sm text-gray-700">abcd@gmail.com</p>
              <p className="text-sm text-gray-700">+91 617385309458</p>
            </div>
          </div>

          <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
            <header className="text-xl font-bold text-gray-700">
              Shipping address
            </header>
            <div className="space-y-1">
              <p className="text-sm text-gray-700">john doe</p>
              <p className="text-sm text-gray-700">marco streets</p>
              <p className="text-sm text-gray-700">near garden</p>
              <p className="text-sm text-gray-700">india</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Page