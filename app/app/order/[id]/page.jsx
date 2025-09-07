import MyOrderItemCard from "@/app/_components/my_orders/MyOrderItemCard";
import MyOrderSummary from "@/app/_components/my_orders/MyOrderSummary";
import { IoArrowBack } from "react-icons/io5";
import { format } from "date-fns";
import Link from "next/link";
import { cookies } from "next/headers";

async function Page({params}) {
    const param = await params;
    const cookie = await cookies();
    const {id} = param;
    let order;
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/order/getOrder/${id}`,{
        method:'GET',
        headers:{
          Cookie:`token=${cookie.get('token')?.value}`
        }
      });
      const resJson = await res.json();
      order = resJson.order;
      console.log(res);
    }catch(err){
      order = false;
      console.log(err);
    }
    if(!order) return <h1>unable to fetch Order, please try again later</h1>
    const date = format(new Date(order.createdAt),"MMMM dd, yyyy 'at' hh:mm a");
    return (
      <div className="flex w-full h-full bg-gray-100 p-5 ">
        <div className="w-[65%]">
          <Link href="/app/purchases/orders" >
            <p className="p-2 hover:bg-gray-200 mb-2 smooth-transition w-fit flex items-center">
              <IoArrowBack className="text-2xl " />cart
            </p>
          </Link>
          <div className="space-y-3">
            <header className="text-2xl font-bold">
              Order ID: {order._id}
            </header>
            <p className="text-sm text-gray-600 tracking-wide">
              ordered on {date}
            </p>
          </div>
          <MyOrderItemCard
            deliveryExpected={order.deliveryExpected}
            productName={order.productName}
            totalAmount={order.totalAmount}
            coverImage={order.coverImage}
            status={order.status}
          />
          <MyOrderSummary
            subtotal={order.subTotal}
            discount={order.discount}
            shipping={order.deliveryCharges}
            totalAmount={order.totalAmount}
          />
        </div>

        <div className="p-3 w-[35%] space-y-4">
          <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
            <header className="text-xl font-bold text-gray-700">
              Instructions
            </header>
            <p className="text-sm text-gray-700">
              {order.instructions || "no instructions provided"}
            </p>
          </div>

          <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
            <header className="text-xl font-bold text-gray-700">
              Contact Information
            </header>
            <div className="space-y-1">
              <p className="text-sm text-gray-700">{order.email}</p>
              <p className="text-sm text-gray-700">{order.phoneNumber}</p>
            </div>
          </div>

          <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
            <header className="text-xl font-bold text-gray-700">
              Shipping address
            </header>
            <div className="space-y-1">
              <p className="text-sm text-gray-700">{order.customerName}</p>
              <p className="text-sm text-gray-700">{order.address.line1}</p>
              <p className="text-sm text-gray-700">{order.address.line2}</p>
              <p className="text-sm text-gray-700">
                {order.address.state}, {order.address.pincode}
              </p>
              <p className="text-sm text-gray-700">india</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Page