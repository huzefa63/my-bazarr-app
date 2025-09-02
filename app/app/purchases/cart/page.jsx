import CartCheckout from "@/app/_components/cart/CartCheckout"
import CartContainer from "@/app/_components/cart/CartContainer"

function Page() {
    return (
        <div className="flex gap-3 h-full w-full">
            <CartContainer />
            <CartCheckout />
        </div>
    )
}

export default Page
