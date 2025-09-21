import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdDiscount, MdLocalShipping } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";

function MyOrderSummary({
  skeleton = false,
  subtotal,
  discount,
  shipping,
  totalAmount,
}) {
  const formatINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const skeletonClass = "animate-pulse bg-gray-100 text-gray-100";

  return (
    <div className="w-full p-3 text-lg bg-white border border-gray-300 shadow-sm rounded-md h-54 mt-5">
      <header
        className={`flex items-center gap-2 font-bold w-full border-b border-gray-300 pb-4 ${
          skeleton ? skeletonClass : ""
        }`}
      >
        {!skeleton && <RiFileList2Fill className="text-blue-500" />} Order
        Summary
      </header>
      <div className="flex justify-between">
        <div className="mt-3 w-full text-sm tet-gray-600 space-y-3">
          <div className="flex items-center justify-between">
            <h1
              className={`flex items-center gap-2 ${
                skeleton ? skeletonClass : ""
              }`}
            >
              {!skeleton && <FaMoneyBillWaveAlt className="text-green-500" />}{" "}
              subtotal
            </h1>
            <p className={skeleton ? skeletonClass : ""}>
              {formatINR(subtotal)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h1
              className={`flex items-center gap-2 ${
                skeleton ? skeletonClass : ""
              }`}
            >
              {!skeleton && <MdDiscount className="text-orange-500" />} discount
            </h1>
            <p className={skeleton ? skeletonClass : ""}>
              {formatINR(discount)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h1
              className={`flex items-center gap-2 ${
                skeleton ? skeletonClass : ""
              }`}
            >
              {!skeleton && <MdLocalShipping className="text-blue-500" />}{" "}
              shipping
            </h1>
            <p className={skeleton ? skeletonClass : ""}>
              {formatINR(shipping)}
            </p>
          </div>
          <hr className="text-gray-300" />
          <div className="flex items-center justify-between">
            <h1 className={skeleton ? skeletonClass : "font-bold"}>Total</h1>
            <p
              className={`${
                skeleton ? skeletonClass : "font-semibold text-gray-800"
              }`}
            >
              {formatINR(totalAmount)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrderSummary;
