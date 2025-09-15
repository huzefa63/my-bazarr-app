import CartCheckout from "@/app/_components/cart/CartCheckout"
import CartContainer from "@/app/_components/cart/CartContainer"
import CartProvider from "@/app/_components/cart/CartProvider"
function Page() {
    
    return (
      <div className="lg:flex gap-3 h-full w-full space-y-5 lg:space-y-0">
        <CartProvider>
          <CartContainer/>
          <CartCheckout />
        </CartProvider>
      </div>
    );
}

export default Page
