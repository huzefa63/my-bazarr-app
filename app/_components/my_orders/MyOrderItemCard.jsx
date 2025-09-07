import { format } from "date-fns";

function MyOrderItemCard({status,productName,totalAmount,deliveryExpected,coverImage}) {
    const amount = new Intl.NumberFormat('en-IN',{
      style:'currency',
      currency:'INR',
    }).format(totalAmount);
    const deliveryDate = format(new Date(deliveryExpected),'MMMM dd, EEEE')
    return (
      <div className="mt-5 p-3 w-full border border-gray-300 shadow-sm rounded-md bg-white">
        <div className="flex items-center gap-3 border-b border-gray-300 pb-4">
          <header className="font-bold text-lg">Order Item</header>
          <div className="flex items-center gap-2 bg-orange-100 w-fit px-3 rounded-full text-orange-400 text-sm">
            <div className="h-2 w-2 rounded-full bg-orange-400"></div>
            <p>{status}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-md overflow-hidden mt-3 ">
            <img src={coverImage} alt="" className="h-full w-full" />
          </div>
          <div className="">
            <h1 className="font-semibold">{productName}</h1>
            <p>{amount}</p>
            <p className="text-gray-600 text-sm">
              delivery expected on {deliveryDate}
            </p>
          </div>
        </div>
      </div>
    );
}

export default MyOrderItemCard
