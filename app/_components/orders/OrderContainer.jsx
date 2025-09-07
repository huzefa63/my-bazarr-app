import OrderItem from "./OrderItem"

function OrderContainer({orders}) {
    if(orders.length < 1) return;
    return (
        <div className="space-y-4 w-full mt-5 overflow-auto">
            {orders.map(order => <OrderItem key={order._id} id={order._id} productName={order.productName} totalAmount={order.totalAmount} status={order.status} deliveryExpected={order.deliveryExpected} coverImage={order.coverImage}/>)}
        </div>
    )
}

export default OrderContainer
