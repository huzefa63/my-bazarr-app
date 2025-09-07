import FilterOptions from "@/app/_components/FilterOptions"
import OrderContainer from "@/app/_components/orders/OrderContainer";
import OrderItem from "@/app/_components/orders/OrderItem";
import { cookies } from "next/headers";
import { PiPackageFill } from "react-icons/pi";

async function Page() {
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
    return (
      <div className="h-full w-full p-5 rounded-md shadow-sm bg-white flex flex-col">
        <header className="text-3xl flex items-center gap-3">
          <PiPackageFill />
          Your Orders
        </header>
        <hr className="text-gray-200 my-5" />
          <FilterOptions />
          <OrderContainer orders={orders}/>
      </div>
    );
}

export default Page
