'use client'

import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import { getSellerOrdersAction } from "@/actions/order";
import SellerOrdersCard from "./SellerOrdersCard";

function SellerOrdersContainer() {
     const { data: orders, isFetching } = useQuery({
       queryKey: ["sellerOrders"],
       queryFn: getSellerOrdersAction,
       refetchOnMount: false,
       refetchOnWindowFocus: true,
     });
     if (!orders || isFetching) return <Spinner />;
    return (
      <div className="w-full px-3 space-y-3">
        {orders.map((el) => (
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
