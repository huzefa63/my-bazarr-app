'use client'

import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import { getSellerOrdersAction } from "@/actions/order";
import SellerOrdersCard from "./SellerOrdersCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsBox2 } from "react-icons/bs";
import axios from "axios";

function SellerOrdersContainer() {
     const { data: orders, isFetching,isLoading } = useQuery({
       queryKey: ["sellerOrders"],
       queryFn:async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/order/getAllSellerOrders`,{withCredentials:true})
            return res.data.orders;
        },
       refetchOnMount: false,
       refetchOnWindowFocus: false,
     });
     const searchParams = useSearchParams();
     const [filteredOrders,setFilteredOrders] = useState();
         useEffect(() => {
             setFilteredOrders(orders);
         },[orders])
     
         useEffect(() => {
             if(!orders) return;
             if(searchParams.get('filter') === 'all') return setFilteredOrders(orders);
             const filtered = orders.filter(el => el.status === searchParams.get('filter'))
             setFilteredOrders(filtered);
         },[searchParams.get('filter')])
   if (isLoading) return <Spinner />;

   if (!filteredOrders?.length) {
     return (
       <h1 className="flex gap-3 text-2xl text-gray-700 absolute top-1/2 left-1/2 -translate-1/2 items-center">
         <BsBox2 /> no orders found!
       </h1>
     );
   }


    return (
      <div className="w-full px-3 space-y-3">
        {orders?.map((el) => (
          <SellerOrdersCard
            key={el._id}
            productName={el.productName}
            totalAmount={el.totalAmount}
            status={el.status}
            id={el._id}
            coverImage={el.coverImage}
            createdAt={el.createdAt}
            customerName={el.customerName}
            address={el.address}
          />
        ))}
      </div>
    );
}

export default SellerOrdersContainer
