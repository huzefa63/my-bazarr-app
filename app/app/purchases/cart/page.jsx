import CartCheckout from "@/app/_components/cart/CartCheckout"
import CartContainer from "@/app/_components/cart/CartContainer"
import CartProvider from "@/app/_components/cart/CartProvider"
function Page() {
    
    return (
      <div className="flex gap-3 h-full w-full">
        <CartProvider>
          <CartContainer/>
          <CartCheckout />
        </CartProvider>
      </div>
    );
}

export default Page
