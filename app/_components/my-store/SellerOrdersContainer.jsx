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
     const [display,setDisplay] = useState(false);
     const [filteredOrders,setFilteredOrders] = useState();
         useEffect(() => {
             setFilteredOrders(orders);
             
         },[orders])
         useEffect(() => {
          const timeout = setTimeout(() => {
            setDisplay(true);
          }, 100);
          return () => {
            clearTimeout(timeout);
            setDisplay(false);
          }
         },[])
     
         useEffect(() => {
             if(!orders) return;
             if(searchParams.get('filter') === 'all' && !searchParams.get('startDate') && !searchParams.get('endDate')) return setFilteredOrders(orders);
             let filtered = orders
            if(searchParams.get('filter') !== 'all') filtered = orders.filter(el => el.status === searchParams.get('filter'));
            if (searchParams.get("startDate"))
              filtered = filtered.filter(
                (el) =>
                  new Date(el.createdAt).setHours(0,0,0,0) >=
                    new Date(searchParams.get("startDate")).setHours(0,0,0,0) &&
                  new Date(el.createdAt).setHours(0,0,0,0) <=
                    new Date(searchParams.get("endDate")).setHours(0,0,0,0)
              );
            setFilteredOrders(filtered);
         },[searchParams.get('filter'),searchParams.get('startDate'),searchParams.get('endDate')])
   if (isFetching && !orders?.length) return <Spinner />;
         
   
    if (!filteredOrders?.length && display &&  !isLoading && !isFetching) {
      return (
        <h1 className="flex gap-3 text-2xl text-gray-700 absolute top-1/2 left-1/2 -translate-1/2 items-center">
          <BsBox2 /> no orders found!
        </h1>
      );
    }



    return (
      <div className="w-full px-3 space-y-3">
        {filteredOrders?.length
          ? filteredOrders?.map((el) => (
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
            ))
          : orders?.map((el) => (
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
