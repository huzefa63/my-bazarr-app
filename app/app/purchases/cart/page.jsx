import CartCheckout from "@/app/_components/cart/CartCheckout"
import CartContainer from "@/app/_components/cart/CartContainer"
import CartProvider from "@/app/_components/cart/CartProvider"
import { cookies } from "next/headers";

export const revalidate = 0;
async function Page() {
    const cookie = await cookies();
    let data;
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/cart/getCartItems`,{
            method:'GET',
            headers:{
                Cookie:`token=${cookie.get('token').value}`
            },
        })
        const resJson = await res.json();
        data = resJson;
    }catch(err){
        console.log(err);
        data = {};
    }
    return (
      <div className="flex gap-3 h-full w-full">
        <CartProvider>
          <CartContainer data={data}/>
          <CartCheckout />
        </CartProvider>
      </div>
    );
}

export default Page
