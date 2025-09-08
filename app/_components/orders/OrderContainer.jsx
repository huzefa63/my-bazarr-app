import { cookies } from "next/headers";
import OrderItem from "./OrderItem"

async function OrderContainer() {
     const cookie = await cookies();
      const token = cookie.get('token')?.value || '';
      let orders;
      try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/order/getAllOrders`,{headers:{Cookie:`token=${token}`}});
        const resJson = await res.json();
        orders = resJson.orders;
      } catch(err){
        console.log(err);
        orders = [];
      }
    if(orders.length < 1) return;
    return (
        <div className="space-y-4 w-full mt-5 overflow-auto">
            {orders.map(order => <OrderItem key={order._id} id={order._id} productName={order.productName} totalAmount={order.totalAmount} status={order.status} deliveryExpected={order.deliveryExpected} coverImage={order.coverImage}/>)}
        </div>
    )
}

export default OrderContainer
