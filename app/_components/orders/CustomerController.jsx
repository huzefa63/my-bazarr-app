"use client";

import { cancelOrderAction } from "@/actions/order";
import { useUserContext } from "../user/UserProvider";
import LoadingButton from "../UI/LoadingButton";

function CustomerController({ status, seller, customer,orderId }) {
  const { user } = useUserContext();
  if(status === 'delivered') return null;
  if(status === 'cancelled') return null;
  if (user?._id !== customer) return null;
  async function handleCancelOrder() {
    await cancelOrderAction(orderId);
  }
  return (
    <div className="w-full text-white grid grid-cols-3 gap-5">
      {status !== 'cancelled' && status !== 'delivered' && <LoadingButton onClick={()=>cancelOrderAction(orderId)} className="smooth-transition shadow-sm hover:bg-red-600 px-3 py-2 rounded-md bg-red-500">
        cancel order
      </LoadingButton>}

    </div>
  );
}

export default CustomerController;
