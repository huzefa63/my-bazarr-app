"use client";

import { cancelOrderAction, deliveredOrderAction, shipeOrderAction } from "@/actions/order";
import { useUserContext } from "../user/UserProvider";
import LoadingButton from "../UI/LoadingButton";
import { useState } from "react";
import toast from "react-hot-toast";

function SellerOrderController({ status, seller, orderId, customer }) {
  const { user } = useUserContext();
  const [isLoading,setIsLoading] = useState(false);
  if(status === 'delivered') return null;
  if(status === 'cancelled') return null;
  if (user?._id !== seller._id) return null;
  if(seller._id === customer) return null;
  return (
    <div className="w-full text-white grid grid-cols-3 gap-5">
      {status !== 'cancelled' && <LoadingButton onClick={() => cancelOrderAction(orderId)} className="shadow-sm hover:bg-red-600 px-3 py-2 rounded-md bg-red-500">
        cancel order
      </LoadingButton>}
      {status !== "shipped" && status !== 'cancelled' &&  (
        <LoadingButton onClick={() => shipeOrderAction(orderId)} className=" shadow-sm text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md bg-gray-300">
          ship order
        </LoadingButton>
      )}
      {status !== 'cancelled' &&  <LoadingButton onClick={() => deliveredOrderAction(orderId)} className=" shadow-sm hover:bg-green-600 px-3 py-2 rounded-md bg-green-500">
        order delivered
      </LoadingButton>}
    </div>
  );
}

export default SellerOrderController;
