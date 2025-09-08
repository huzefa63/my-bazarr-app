'use client';

import { useState } from "react";
import { useCartContext } from "./CartProvider";
import { useUserContext } from "../user/UserProvider";
import { checkoutAction } from "@/actions/cart";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Spinner from "../Spinner";
import formatCurrency from "@/helpers/formatCurrency";
import toast from "react-hot-toast";
import Link from "next/link";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
function CartCheckout() {
  const [delivery, setDelivery] = useState("free");
  const [isCheckouting,setIsCheckouting] = useState(false);
  const { items } = useCartContext();
  const { user } = useUserContext();
  const totalPrice = items?.reduce(
    (pre, curr) => pre + curr.price * curr.quantity,
    0
  );
  const deliveryCharge = delivery === "free" ? 0 : 80;
  const discount = Math.ceil((totalPrice + deliveryCharge)  * 0.1); // in paise
  const finalPrice = totalPrice + deliveryCharge - discount;
  async function handleCheckout() {
    if(items?.length < 1) return toast.error("you don't have any items in cart to checkout!");
    const today = new Date();
    today.setDate(today.getDate() + 3);
    const checkout = {
      items,
      totalPrice,
      discount,
      deliveryCharges: delivery === "free" ? 0 : 80,
      finalPrice,
      email: user.email,
      deliveryExpected: today,
    };
    setIsCheckouting(true);
    try {
      const res = await checkoutAction(checkout);
      console.log(res);
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: res.id });
    } catch (err) {
      console.log(err);
    }finally{
      setIsCheckouting(false);
    }
  }
  return (
    <div className="flex flex-col gap-5 bg-white flex-1 rounded-md shadow-md p-3 text-xl ">
      <div className="flex flex-col gap-2 border-b border-b-gray-200 pb-3">
        <p>Delivery</p>
        <div className="flex gap-5 bg-gray-100 w-fit p-1 rounded-md text-sm">
          <button
            onClick={() => setDelivery("free")}
            className={`${
              delivery === "free" && "bg-white hover:bg-white"
            } px-2 py-1 rounded-md  smooth-transition hover:bg-gray-200`}
          >
            Free
          </button>
          <button
            onClick={() => setDelivery("express")}
            className={`px-2 py-1 rounded-md  smooth-transition hover:bg-gray-200 ${
              delivery === "express" && "bg-white hover:bg-white"
            }`}
          >
            Express: 80 rs
          </button>
        </div>
        <p className="text-sm text-gray-600">Delivery date: october 1, 2024</p>
      </div>

      <div className="flex flex-col gap-2 text-sm border-b border-b-gray-200 pb-5">
        <h1 className="text- text-gray-500xl">Subtotal</h1>
        <div className="flex justify-between text-gray-500">
          <p>
            discount <span className="text-[11px] text-gray-600">(10%)</span>
          </p>
          <p className="text-green-500">-{formatCurrency(discount)} rs</p>
        </div>
        <div className="flex justify-between text-gray-500">
          <p>Delivery</p>
          <p>{formatCurrency(deliveryCharge)} rs</p>
        </div>
        {/* <div className="flex justify-between text-gray-500">
          <p>
            Tax
            <span className="text-[11px] ml-1 text-gray-600">(18%)</span>
          </p>
          <p className="text-red-500">+{tax} rs</p>
        </div> */}
      </div>

      <div className="text-lg flex flex-col gap-5">
        <div className="flex justify-between">
          <h1>Total</h1>
          <p>{formatCurrency(finalPrice)} rs</p>
        </div>
        <div className="flex flex-col gap-2 w-full text-white">
          <button
          disabled={isCheckouting}
            className="bg-blue-500 relative py-2 rounded-md smooth-transition hover:bg-blue-600"
            onClick={handleCheckout}
          >
            {isCheckouting && <Spinner />}
            <span className={`${isCheckouting && 'opacity-0'}`}>Proceed to checkout</span>
          </button>
          <Link href="/app/browse" className="text-black border text-center border-gray-300 shadow-sm py-2 rounded-md smooth-transition hover:bg-gray-200">
            Continue shopping
          </Link>

          {/* Address section */}
          {/* <h1 className="text-xl text-black text-bold mt-3">Address</h1>
          {user?.address && (
            <div className="text-sm text-gray-600 flex flex-col gap-1">
              <hr className="text-gray-200" />
              <p>{user.address.street}</p>
              <p>
                {user.address.city + ", " + user.address.state + ", "}
                {user.address.pincode}
              </p>
              <p>{user.email}</p>
              <p>+91 {user.phoneNumber}</p>
            </div>
          )}
          {!user?.address && (
            <button className="px-5 mx-auto w-fit text-sm py-2 rounded-md bg-purple-500 mt-5 smooth-transition hover:bg-purple-600">
              Add address
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default CartCheckout
