function MyOrderSummary({subtotal,discount,shipping,totalAmount}) {
  const formatINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };
    return (
      <div className="w-full p-3 text-lg bg-white border border-gray-300 shadow-sm rounded-md h-54 mt-5 ">
        <header className="w-full border-b border-gray-300 pb-4">
          Order Summary
        </header>
        <div className="flex justify-between">
          <div className="mt-3 w-full text-sm tet-gray-600 space-y-3 ">
            <div className="flex items-center justify-between">
              <h1>subtotal</h1>
              <p>{formatINR(subtotal)}</p>
            </div>
            <div className="flex items-center justify-between">
              <h1>discount</h1>
              <p>{formatINR(discount)}</p>
            </div>
            <div className="flex items-center justify-between">
              <h1>shipping</h1>
              <p>{formatINR(shipping)}</p>
            </div>
            <hr className="text-gray-300"/>
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Total</h1>
              <p className="font-semibold text-gray-800">{formatINR(totalAmount)}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyOrderSummary
{/* <div className="mt-5 flex items-center gap-3">
                    <img src="dsfsdf" alt="" className="h-17 w-17" />
                    <div>
                        <p className="text-gray-800">Men T-shirt for party wear</p>
                        <p className="text-sm text-gray-600">made with silk</p>
                    </div>
                </div>
                    <p>1,349 rs</p> */}