import MyOrderSummary from "@/app/_components/my_orders/MyOrderSummary";
import ShippingAddressForm from "@/app/_components/ShippingAddressForm"

function Page() {
    return (
      <div className="w-full h-full bg-gray-100 p-3 flex gap-5">
        <div className="w-[65%] h-full p-5 bg-white rounded-md shadow-sm border border-gray-200">
          <header className="text-2xl mb-4 font-bold text-gray-800">
            Shipping Address
          </header>
          <ShippingAddressForm />
        </div>

        <div className="p-5 bg-white border-gray-300 border w-[35%] rounded-md">
          <header className="text-2xl font-bold text-gray-800">Product</header>
          <div className="flex items-center justify-between"> 
            <div className="mt-5 flex items-center gap-3">
              <img src="dsfsdf" alt="" className="h-17 w-17" />
              <div>
                <p className="text-gray-800">Men T-shirt for party wear</p>
                <p className="text-sm text-gray-600">made with silk</p>
              </div>
            </div>
            <p className="font-bold text-gray-800">1,349 rs</p>
          </div>
          <hr className="my-5 text-gray-400"/>
          <MyOrderSummary />
          <button className="w-full hover:scale-101 mt-5 rounded-md py-3 smooth-transition hover:bg-black text-center bg-black/90 text-white">Continue to payment</button>
        </div>
      </div>
    );
}

export default Page
