'use client';
import { useQuery } from "@tanstack/react-query";
import OrderItem from "./OrderItem"
import { getCustomerOrdersAction } from "@/actions/order";
import Spinner from "../Spinner";

function OrderContainer() {
    const {data:orders,isFetching} = useQuery({
        queryKey:['customerOrders'],
        queryFn:getCustomerOrdersAction,
        refetchOnMount:false,
        refetchOnWindowFocus:true,
    })
    if(!orders || isFetching) return <Spinner />
    return (
        <div className="space-y-4 w-full mt-5 overflow-auto">
            {orders.map(order => <OrderItem key={order._id} id={order._id} productName={order.productName} totalAmount={order.totalAmount} status={order.status} deliveryExpected={order.deliveryExpected} coverImage={order.coverImage}/>)}
        </div>
    )
}

export default OrderContainer
