'use client';
import { useQuery } from "@tanstack/react-query";
import OrderItem from "./OrderItem"
import Spinner from "../Spinner";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsBox2 } from "react-icons/bs";
import axios from "axios";

function OrderContainer() {
    const {data:orders,isFetching,isLoading} = useQuery({
        queryKey:['customerOrders'],
        queryFn:async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/order/getAllOrders`,{withCredentials:true})
            return res.data.orders;
        },
        refetchOnMount:false,
        refetchOnWindowFocus:false,
    })
    const [filteredOrders,setFilteredOrders] = useState();
    const searchParams = useSearchParams();
    useEffect(() => {
        setFilteredOrders(orders);
    },[orders])

     useEffect(() => {
       if (!orders) return;
       if (
         searchParams.get("filter") === "all" &&
         !searchParams.get("startDate") &&
         !searchParams.get("endDate")
       )
         return setFilteredOrders(orders);
       let filtered = orders;
       if (searchParams.get("filter") !== "all")
         filtered = orders.filter(
           (el) => el.status === searchParams.get("filter")
         );
       if(searchParams.get('startDate')) filtered = filtered.filter(
         (el) =>
           new Date(el.deliveryExpected).setHours(0, 0, 0, 0) >=
             new Date(searchParams.get("startDate")).setHours(0, 0, 0, 0) &&
           new Date(el.deliveryExpected).setHours(0, 0, 0, 0) <=
             new Date(searchParams.get("endDate")).setHours(0, 0, 0, 0)
       );
       setFilteredOrders(filtered);
     }, [
       searchParams.get("filter"),
       searchParams.get("startDate"),
       searchParams.get("endDate"),
     ]);

    if(!filteredOrders?.length && isFetching) return <Spinner />
     if (
       !filteredOrders?.length &&
       !isLoading &&
       !isFetching
     ) {
       return (
         <h1 className="whitespace-nowrap flex gap-3 text-2xl text-gray-700 absolute top-1/2 left-1/2 -translate-1/2 items-center">
           <BsBox2 /> no orders found!
         </h1>
       );
     }
    return (
        <div className="space-y-4 w-full mt-5 relative">
            {filteredOrders?.map(order => <OrderItem key={order._id} id={order._id} productName={order.productName} totalAmount={order.totalAmount} status={order.status} deliveryExpected={order.deliveryExpected} coverImage={order.coverImage}/>)}
        </div>
    )
}

export default OrderContainer
