function OrderStatus({ status }) {
  let bgColor = "";
  let textColor = "";
  let dotColor = "";

  switch (status) {
    case "processing":
      bgColor = "bg-orange-100";
      textColor = "text-orange-400";
      dotColor = "bg-orange-400";
      break;
    case "shipped":
      bgColor = "bg-blue-100";
      textColor = "text-blue-500";
      dotColor = "bg-blue-500";
      break;
    case "delivered":
      bgColor = "bg-green-100";
      textColor = "text-green-500";
      dotColor = "bg-green-500";
      break;
    case "cancelled":
      bgColor = "bg-red-100";
      textColor = "text-red-500";
      dotColor = "bg-red-500";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-500";
      dotColor = "bg-gray-400";
  }

  return (
    <div
      className={`flex items-center gap-2 ${bgColor} w-fit px-3 rounded-full text-sm ${textColor}`}
    >
      <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      <p className="capitalize">{status}</p>
    </div>
  );
}

export default OrderStatus;
