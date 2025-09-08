"use client";

import { cancelOrderAction, deliveredOrderAction, shipeOrderAction } from "@/actions/order";
import { useUserContext } from "../user/UserProvider";

function SellerOrderController({ status, seller, orderId, customer }) {
  const { user } = useUserContext();
  if(status === 'delivered') return null;
  if(status === 'cancelled') return null;
  if (user?._id !== seller._id) return null;
  if(seller._id === customer) return null;
  async function handleCancelOrder() {
    await cancelOrderAction(orderId);
  }
  async function handleShipOrder() {
    await shipeOrderAction(orderId);
  }
  async function handleDeliveredOrder() {
    await deliveredOrderAction(orderId);
  }
  return (
    <div className="w-full text-white grid grid-cols-3 gap-5">
      {status !== 'cancelled' && <button onClick={handleCancelOrder} className="smooth-transition shadow-sm hover:bg-red-600 px-3 py-2 rounded-md bg-red-500">
        cancel order
      </button>}
      {status !== "shipped" && status !== 'cancelled' &&  (
        <button onClick={handleShipOrder} className="smooth-transition shadow-sm text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md bg-gray-300">
          ship order
        </button>
      )}
      {status !== 'cancelled' &&  <button onClick={handleDeliveredOrder} className="smooth-transition shadow-sm hover:bg-green-600 px-3 py-2 rounded-md bg-green-500">
        order delivered
      </button>}
    </div>
  );
}

export default SellerOrderController;
