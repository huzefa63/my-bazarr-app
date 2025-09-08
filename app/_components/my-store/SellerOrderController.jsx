"use client";

import {
  cancelOrderAction,
  deliveredOrderAction,
  shipeOrderAction,
} from "@/actions/order";
import { useUserContext } from "../user/UserProvider";
import LoadingButton from "../UI/LoadingButton";
import { useQueryClient } from "@tanstack/react-query";

function SellerOrderController({ status, seller, orderId, customer }) {
  const { user } = useUserContext();
  const queryClient = useQueryClient();

  if (status === "delivered") return null;
  if (status === "cancelled") return null;
  if (user?._id !== seller._id) return null;
  if (seller._id === customer) return null;

  return (
    <div className="w-full text-white grid grid-cols-3 gap-5">
      {/* Cancel Order */}
      {status !== "cancelled" && (
        <LoadingButton
          onClick={async () => {
            await cancelOrderAction(orderId);
            queryClient.refetchQueries(["sellerOrders"]);
          }}
          className="shadow-sm hover:bg-red-600 px-3 py-2 rounded-md bg-red-500"
        >
          Cancel order
        </LoadingButton>
      )}

      {/* Ship Order */}
      {status !== "shipped" && status !== "cancelled" && (
        <LoadingButton
          onClick={async () => {
            await shipeOrderAction(orderId);
            queryClient.refetchQueries(["sellerOrders"]);
          }}
          className="shadow-sm text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md bg-gray-300"
        >
          Ship order
        </LoadingButton>
      )}

      {/* Delivered */}
      {status !== "cancelled" && (
        <LoadingButton
          onClick={async () => {
            await deliveredOrderAction(orderId);
            queryClient.refetchQueries(["sellerOrders"]);
          }}
          className="shadow-sm hover:bg-green-600 px-3 py-2 rounded-md bg-green-500"
        >
          Order delivered
        </LoadingButton>
      )}
    </div>
  );
}

export default SellerOrderController;
