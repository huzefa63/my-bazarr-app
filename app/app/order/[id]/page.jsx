import MyOrderItemCard from "@/app/_components/my_orders/MyOrderItemCard";
import MyOrderSummary from "@/app/_components/my_orders/MyOrderSummary";
import { IoArrowBack } from "react-icons/io5";
import { format } from "date-fns";
import Link from "next/link";
import { cookies } from "next/headers";
import SellerOrderController from "@/app/_components/my-store/SellerOrderController";
import BackButton from "@/app/_components/BackButton";
import CustomerController from "@/app/_components/orders/CustomerController";
import RatingComponent from "@/app/_components/RatingComponent";
import { Review } from "@/app/_components/product_page/CommentSection";
import Instructions from "@/app/_components/orders/Instructions";
import { BiSolidContact } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
async function Page({params}) {
    const param = await params;
    const cookie = await cookies();
    const {id} = param;
    let order;
    let currentUser;
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/order/getOrder/${id}`,{
        method:'GET',
        headers:{
          Cookie:`token=${cookie.get('token')?.value}`
        }
      });
      const resJson = await res.json();
      order = resJson.order;
      currentUser = resJson.currentUser;
      console.log(order);
    }catch(err){
      order = false;
      console.log(err);
    }
    if(!order) return <h1>unable to fetch Order, please try again later</h1>
    const date = format(new Date(order.createdAt),"MMMM dd, yyyy 'at' hh:mm a");
    return (
      <div className=" w-full h-full bg-gray-100 p-5 relative overflow-auto">
        <div className="w-full h-fit lg:flex space-y-5 lg:space-y-0">
          <div className="lg:w-[65%]">
            <div className="mb-2">
              <BackButton />
            </div>
            <div className="space-y-3">
              <header className="lg:text-2xl text-xl font-bold">
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

          <div className="lg:p-3 lg:w-[35%] space-y-4">
           <Instructions instructions={order.instructions} status={order.status} orderId={order._id} customerId={order.customer}/>

            <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
              <header className="flex items-center gap-2 text-xl font-bold text-gray-700">
                <BiSolidContact className="text-amber-950"/> Contact Information
              </header>
              <div className="space-y-1">
                <p className="text-sm text-gray-700">{order.email}</p>
                <p className="text-sm text-gray-700">{order.phoneNumber}</p>
              </div>
            </div>

            <div className="w-full bg-white space-y-4 border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
              <header className="flex items-center gap-2 text-xl font-bold text-gray-700">
                <ImLocation2 /> Shipping address
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
            <SellerOrderController
            customerEmail={order.email}
              status={order.status}
              seller={order.seller}
              orderId={order._id}
              customer={order.customer}
            />
            <CustomerController
              status={order.status}
              customer={order.customer}
              orderId={order._id}
            />
          </div>
        </div>
        {order?.rated && order.customer === currentUser && (
          <h1 className="text-2xl mt-6 mb-5 text-center">
            you rated this product {order.rating} star
          </h1>
        )}
        {order?.rated && order.customer === currentUser && (
          <div className="w-fit bg-white shadow-md rounded-xl p-4 mx-auto">
            {/* Header: Name + Date */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-5">
                <span className="font-semibold text-gray-800">
                  You
                </span>
                <div className="flex items-center mr-5">
                  <span className="ml-3 mr-1 text-gray-700 text-sm">{order.rating}</span>
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill={i < order.rating ? "gold" : "lightgray"}
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(order.ratingDate).toLocaleDateString()}
              </span>
            </div>

            {/* Rating stars */}

            {/* Comment */}
            <p className="text-gray-700">{order.comment}</p>
          </div>
        )}

        {!order?.rated && order.customer === currentUser && order.status === 'delivered' && (
          <h1 className="text-center font-bold text-3xl mt-5">
            Make sure to drop a Review here
          </h1>
        )}
        {!order?.rated && order.customer === currentUser && order.status === 'delivered' && (
          
            <RatingComponent customerId={order.customer} orderId={order._id} id={order.product._id} />
          
        )}
      </div>
    );
}

export default Page