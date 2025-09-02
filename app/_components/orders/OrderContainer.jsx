import OrderItem from "./OrderItem"

function OrderContainer() {
    return (
        <div className="space-y-4 w-full mt-5 overflow-auto">
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>
    )
}

export default OrderContainer
