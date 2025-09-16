'use client';
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { useCartContext } from "./CartProvider";
import Spinner from "../Spinner";
import formatCurrency from "@/helpers/formatCurrency";

function CartItem({image,price,name,inStock,id,isDeletingId}) {
  const [isHover,setIsHover] = useState(true);
  const [quantity,setQuantity] = useState(1);
  const {setItems} = useCartContext();

  function increaseQuantity(){
    if(quantity >= 30) return;
    setQuantity(quantity + 1); 
    setItems(el => {
      const updatedArr = el.map(el => el.productId === id ? {...el,quantity:el.quantity+1}:el)
      console.log(updatedArr)
      return updatedArr
    })
  }
  function decreaseQuantity(){
    if (quantity === 1) return;
    setQuantity(quantity - 1);
    setItems(el => {
      const updatedArr = el.map(el => el.productId === id ? {...el,quantity:el.quantity-1}:el);
      return updatedArr;
    })
  }

    return (
      <div
        data-id={id}
        className={`${
          isHover && "hover:bg-gray-100 "
        } parent smooth-transition px-5 border-b-1 border-b-gray-200 h-[25%] py-4 flex items-center`}
      >
        <div className="lg:min-w-32 lg:max-w-32 min-w-24 max-w-24 h-24 lg:h-full rounded-md">
          <img
            src={image}
            alt=""
            className="w-full h-full object-fit rounded-md"
          />
        </div>
        <div className="flex-1 ml-5 flex flex-col gap-3">
          <div className="flex justify-between w-full">
            <h1 className="text-gray-600 text-lg line-clamp-1">{name}</h1>
            <p className="font-semibold text-xs lg:text-lg">{formatCurrency(price)}</p>
          </div>
          <div className="flex gap-1 items-center text-sm">
            <p className="text-gray-500">{formatCurrency(price)}</p>
            <span className="text-gray-200">|</span>
            <p className={`${inStock ? "text-green-500" : "text-red-500"}`}>
              {inStock ? "in stock" : "out of stock"}
            </p>
          </div>
          {/* <p>made with pure cotton which excels in comfort</p> */}
          <div className="flex justify-between">
            <div
              className="flex text-gray-500 gap-3 rounded-md w-fit border-1 border-gray-200 py-"
              onMouseEnter={() => setIsHover(false)}
              onMouseLeave={() => setIsHover(true)}
            >
              <button
                className="px-2 hover:bg-gray-100 soomth transition pointer"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-2 hover:bg-gray-100 soomth transition pointer"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button
              onMouseEnter={() => setIsHover(false)}
              onMouseLeave={() => setIsHover(true)}
              className="delete relative smooth-transition hover:scale-105 bg-red-500 text-white rounded-sm hover:bg-red-600 px-2 py-1 text-xs"
            >
              <span
                className={`${
                  isDeletingId === id ? "opacity-0" : ""
                } flex items-center gap-1 delete`}
              >
                <FaTrash className="delete hidden" /> remove
              </span>
              {isDeletingId === id && <Spinner />}
            </button>
          </div>
        </div>
      </div>
    );
}

export default CartItem
