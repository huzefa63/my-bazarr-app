'use client';

import { useState } from "react";
import { useCartContext } from "./CartProvider";

function CartCheckout() {
  const [delivery,setDelivery] = useState('free');
  const {items} = useCartContext();
  const totalPrice = items?.reduce((pre,curr) => pre + curr.price * curr.quantity,0)
  const discount = Math.floor(totalPrice * (10 / 100));
  const tax = Math.floor(totalPrice * (18 / 100))
  const deliveryCharge = delivery === 'free' ? 0 : 80;
  const finalPrice = (totalPrice - discount) + deliveryCharge + tax;
  function handleCheckout(){
    console.log(items);
    console.log(finalPrice)
  }
    return (
      <div className=" flex flex-col gap-5 bg-white flex-1 rounded-md shadow-md p-3 text-xl ">
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
          <p className="text-sm text-gray-600">
            Delivery date: october 1, 2024
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm border-b border-b-gray-200 pb-5">
          <h1 className="text- text-gray-500xl">Subtotal</h1>
          <div className="flex justify-between text-gray-500">
            <p>
              discount <span className="text-[11px] text-gray-600">(10%)</span>
            </p>
            <p className="text-green-500">-{discount} rs</p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Delivery</p>
            <p>{deliveryCharge} rs</p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>
              Tax
              <span className="text-[11px] ml-1 text-gray-600">(18%)</span>
            </p>
            <p className="text-red-500">+{tax} rs</p>
          </div>
        </div>

        <div className="text-lg flex flex-col gap-5">
          <div className="flex justify-between">
            <h1>Total</h1>
            <p>{finalPrice} rs</p>
          </div>
          <div className="flex flex-col gap-2 w-full text-white">
            <button
              className="bg-blue-500 py-2 rounded-md smooth-transition hover:bg-blue-600"
              onClick={handleCheckout}
            >
              Proceed to checkout
            </button>
            <button className="text-black border border-gray-300 shadow-sm py-2 rounded-md smooth-transition hover:bg-gray-200">
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    );
}

export default CartCheckout
