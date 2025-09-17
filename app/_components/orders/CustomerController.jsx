"use client";

import { cancelOrderAction } from "@/actions/order";
import { useUserContext } from "../user/UserProvider";
import LoadingButton from "../UI/LoadingButton";
import { useQueryClient } from "@tanstack/react-query";

function CustomerController({ status, seller, customer,orderId }) {
  const { user } = useUserContext();
  const queryCLient = useQueryClient();
  if(status === 'delivered') return null;
  if(status === 'cancelled') return null;
  if (user?._id !== customer) return null;
  
  return (
    <div className="w-full text-white">
      {status !== 'cancelled' && status !== 'delivered' && <LoadingButton onClick={async ()=>{
        await cancelOrderAction(orderId);
        queryCLient.refetchQueries(['customerOrders']);
      }} className="smooth-transition shadow-sm whitespace-nowrap hover:bg-red-600 px-3 py-2 rounded-md bg-red-500">
        cancel order
      </LoadingButton>}

    </div>
  );
}

export default CustomerController;
