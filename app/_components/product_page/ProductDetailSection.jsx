"use client";
import { addToCart, checkoutAction, orderCheckoutAction } from "@/actions/cart";
import formatCurrency from "@/helpers/formatCurrency";
import { loadStripe } from "@stripe/stripe-js";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BsShieldCheck } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaSync } from "react-icons/fa";
import {
  IoIosShareAlt,
  IoMdStar,
  IoMdStarOutline,
  IoMdSync,
} from "react-icons/io";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Spinner from "../Spinner";
import RatingComponent from "../RatingComponent";
import RatingStars from "../UI/RatingStars";
import toast from "react-hot-toast";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
function ProductDetailSection({
  id,
  name,
  ratingsAvg,
  description,
  price,
  about,
  email,
  product,
  coverImage,
  avgRating,
  commentsCount
}) {
  console.log('a',avgRating)
  const queryClient = useQueryClient();
  const [isCheckouting, setIsCheckouting] = useState(false);
  const [value,setValue] = useState(1); 
  const [delivery,setDelivery] = useState(0); 
  const discountedAmount = price - (price * 0.1);
  async function handleAddToCart() {
    try {
      await addToCart({ id });
      queryClient.refetchQueries(["cart"]);
      toast.success('added to cart')
    } catch (err) {
      console.log(err);
    }
  }
  async function handlePurchase() {
    const item = {coverImage:product.coverImage,description,
      name,price,productId:id,quantity:value,sellerEmail:email,sellerId:product.seller._id ,deliveryCharges:0
    }
    setIsCheckouting(true);
    try {
      const res = await orderCheckoutAction(item);
      const stripe = await stripePromise;
      // console.log(res)
      await stripe.redirectToCheckout({sessionId:res.id});
      
    } catch (err) {
      console.log(err);
    }finally{
      setIsCheckouting(false);
    }
  }

  async function share(){
          try {
            await navigator.share({
              title: name,
              text: `Check out this amazing product on www.my-bazarr.in`,
              url: `https://www.my-bazarr.in/app/product/${id}`,
            });
            console.log("Content shared successfully");
          } catch (error) {
            console.error("Error sharing content:", error);
          }

  }
  return (
    <div className=" w-3/4 pl-10 flex flex-col gap-3 h-full overflow-auto">
      <div className="flex justify-between items-center">
        <p className="font-bold text-3xl">{name}</p>
        <button onClick={share} className="p-2 rounded-md hover:bg-gray-300 smooth-transition pointer">
          <IoIosShareAlt className="text-4xl" />
        </button>
      </div>
      <div className="flex items-center text-2xl text-yellow-400">
        <span className="text-gray-800 text-lg mt-1 mr-1">{avgRating[0]?.ratingsAvg?.toFixed(1)}</span>
        {!avgRating[0]?.ratingsAvg && <span className="text-gray-700 text-sm mr-1">0</span>}
        {!avgRating[0]?.ratingsAvg && <RatingStars gap={0} size="text-2xl" length={0}/>}
        {avgRating[0]?.ratingsAvg && <RatingStars gap={0} size="text-2xl" length={Math.floor(avgRating[0].ratingsAvg)}/>}
        <span className="text-sm text-gray-700 ml-2 mt-1">({commentsCount} reviews)</span>
      </div>
      <p className="w-3/4">{description}</p>
      <hr className="w-3/4 text-gray-400" />
      <p className="text-gray-800 font-semibold text-2xl">
        {formatCurrency(discountedAmount * value)}{" "}
        <span className="text-xs line-through text-green-500">
          {formatCurrency(price * value)}
        </span>{" "}
        <span className="text-xs text-green-500">10% off</span>
      </p>
      <p className="text-sm">inclusive all taxes</p>
      <div className="w-3/4 space-y-3">
        <button
          onClick={handleAddToCart}
          className="smooth-transition hover:bg-blue-700 pointer py-2 bg-blue-600 text-white w-full"
        >
          Add to Cart
        </button>
        <button
        disabled={isCheckouting}
          onClick={handlePurchase}
          className="relative disabled:cursor-not-allowed smooth-transition hover:bg-gray-300 pointer py-2 border-gray-400 border w-full"
        >
          {isCheckouting && <Spinner />}
          <span className={`${isCheckouting && 'opacity-0'}`}>Buy Now</span>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <p>Quantity: </p>
        <select
          id="numbers"
          className="px-3 bg-gray-200 rounded-md"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1} className="text-black bg-white">
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-1 items-center mt-5">
        <p className="font-semibold">Seller email:</p>
        <p className="text-gray-600">{email}</p>
      </div>
      <div className="flex gap-12 mt-6 ">
        <div className="flex flex-col  items-center gap-1 ">
          <span className="p-2 rounded-full bg-gray-300">
            <IoReturnUpBackOutline />
          </span>
          <p className="text-center text-sm">10 days return</p>
        </div>
        <div className="flex flex-col items-center gap-1 ">
          <span className="p-2 rounded-full bg-gray-300">
            <IoMdSync />
          </span>
          <p className="text-center text-sm">10 days replacement</p>
        </div>
        <div className="flex flex-col items-center gap-1 ">
          <span className="p-2 rounded-full bg-gray-300">
            <BsShieldCheck />
          </span>
          <p className="text-center text-sm">1 year warranty</p>
        </div>
        <div className="flex flex-col items-center gap-1 ">
          <span className="p-2 rounded-full bg-gray-300">
            <CiDeliveryTruck />
          </span>
          <p className="text-center text-sm">free delivery</p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-5">About The Product</h1>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default ProductDetailSection;
