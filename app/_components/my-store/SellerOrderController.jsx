"use client";

import {
  cancelOrderAction,
  deliveredOrderAction,
  shipeOrderAction,
} from "@/actions/order";
import { useUserContext } from "../user/UserProvider";
import LoadingButton from "../UI/LoadingButton";
import { useQueryClient } from "@tanstack/react-query";
import VerifyOtpForm from "../auth/VerifyOtpForm";
import { useState } from "react";
import axios from "axios";

function SellerOrderController({ status, seller, orderId, customer, customerEmail }) {
  const { user } = useUserContext();
  const queryClient = useQueryClient();
  const [showForm,setShowForm] = useState(false);

  if (status === "delivered") return null;
  if (status === "cancelled") return null;
  if (user?._id !== seller._id) return null;
  if (seller._id === customer) return null;

  async function successHandler(){
    await deliveredOrderAction(orderId);
    queryClient.refetchQueries(["sellerOrders"]);
  }
  return (
    <div className="w-full text-white grid grid-cols-3 gap-5">
      {/* Cancel Order */}
      {showForm && <div className="z-50 absolute top-1/2 left-1/2 -translate-1/2  border">
      <p className="text-4xl absolute right-5 top-5 text-red-500 ">x</p>
        <VerifyOtpForm successHandler={successHandler} type="delivery" endpoint="/otp/verifyDeliveryOtp" close={true} closeFn={()=>setShowForm(false)} email={customerEmail}/>
      </div>}
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
      {status !== "cancelled" && status === "shipped" && (
        <LoadingButton
          onClick={async () => {
            setShowForm(true)
            await axios.post(`${process.env.NEXT_PUBLIC_URL}/otp/sendDeliveryOtp`,{customerEmail},{withCredentials:true})
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
