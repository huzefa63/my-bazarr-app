'use client';
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

function CartItem() {
  const [isHover,setIsHover] = useState(true);
  const [quantity,setQuantity] = useState(1);
  function increaseQuantity(){
    if(quantity >= 30) return;
    setQuantity(quantity + 1);
  }
  function decreaseQuantity(){
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  }
    const link =
      "https://images.pexels.com/photos/10250614/pexels-photo-10250614.jpeg";
    return (
      <div
        className={`${
          isHover && "hover:bg-gray-100 "
        } smooth-transition px-5 border-b-1 border-b-gray-200 h-[25%] py-4 flex items-center`}
      >
        <div className="w-1/8 h-full rounded-md">
          <img
            src={link}
            alt=""
            className="w-full h-full object-fit rounded-md"
          />
        </div>
        <div className="flex-1 ml-5 flex flex-col gap-3">
          <div className="flex justify-between w-full">
            <h1 className="text-gray-600 text-lg">Released Fit T-shirt</h1>
            <p className="font-semibold">1,299 rs</p>
          </div>
          <div className="flex gap-1 items-center text-sm">
            <p className="text-gray-500">1,299 rs</p>
            <span className="text-gray-200">|</span>
            <p className="text-green-500">in stock</p>
          </div>
          {/* <p>made with pure cotton which excels in comfort</p> */}
          <div className="flex justify-between">
            <div
              className="flex text-gray-500 gap-3 rounded-md w-fit border-1 border-gray-200 py-"
              onMouseEnter={() => setIsHover(false)}
              onMouseLeave={() => setIsHover(true)}
            >
              <button className="px-2 hover:bg-gray-100 soomth transition pointer" onClick={decreaseQuantity}>
                -
              </button>
              <span>{quantity}</span>
              <button className="px-2 hover:bg-gray-100 soomth transition pointer" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button
              onMouseEnter={() => setIsHover(false)}
              onMouseLeave={() => setIsHover(true)}
              className="smooth-transition hover:scale-105 bg-red-500 text-white rounded-sm hover:bg-red-600 px-2 py-1 flex items-center gap-1 text-xs"
            >
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      </div>
    );
}

export default CartItem
