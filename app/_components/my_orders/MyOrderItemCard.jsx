import OrderStatus from "../orders/OrderStatus";
import { BsBoxSeamFill } from "react-icons/bs";

function MyOrderItemCard({
  skeleton = false,
  status,
  productName,
  totalAmount,
  deliveryExpected,
  coverImage,
}) {
  const amount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(totalAmount);
  const deliveryDate = new Date(deliveryExpected).toLocaleDateString("en-IN", {
    month: "long",
    day: "2-digit",
    weekday: "long",
  });

  const skeletonClass = "animate-pulse bg-gray-100 text-gray-100";

  return (
    <div className="mt-5 p-3 w-full border border-gray-300 shadow-sm rounded-md bg-white">
      <div className="flex items-center gap-3 border-b border-gray-300 pb-4">
        <header
          className={`flex items-center gap-2 font-bold text-lg ${
            skeleton ? skeletonClass : ""
          }`}
        >
          <BsBoxSeamFill className={`text-amber-950 ${skeleton && 'opacity-0'} `} /> Order Item
        </header>
        {!skeleton && <OrderStatus status={skeleton ? "loading" : status} />}
        {skeleton &&  <div className="bg-gray-100 text-gray-100 animate-pulse rounded-full">nothingsdfsdfsdfdsf</div>}
      </div>
      <div className="flex items-center gap-5">
        <div
          className={`min-w-28 max-w-28 h-24 rounded-md overflow-hidden mt-3 ${
            skeleton ? skeletonClass : ""
          }`}
        >
          {!skeleton && (
            <img src={coverImage} alt="" className="h-full w-full" />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h1
            className={`font-semibold line-clamp-1 ${
              skeleton ? skeletonClass : ""
            }`}
          >
            {productName}
          </h1>
          <p className={`${skeleton ? skeletonClass : ""}`}>{amount}</p>
          <p
            className={`${skeleton ? skeletonClass : "text-gray-600"} text-sm`}
          >
            delivery expected on {deliveryDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyOrderItemCard;
