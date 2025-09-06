'use client'
import { BsShieldCheck } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaSync } from "react-icons/fa";
import { IoIosShareAlt, IoMdStar, IoMdStarOutline, IoMdSync } from "react-icons/io";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { TiArrowSync } from "react-icons/ti";
function ProductDetailSection({name,ratingsAvg,description,price,about,email}) {
    return (
      <div className=" w-3/4 pl-10 flex flex-col gap-3 h-full overflow-auto">
        <div className="flex justify-between items-center">
          <p className="font-bold text-3xl">{name}</p>
          <button className="p-2 rounded-md hover:bg-gray-300 smooth-transition pointer">
            <IoIosShareAlt className="text-4xl" />
          </button>
        </div>
        <p className="flex items-center text-2xl text-yellow-400">
          <span className="text-gray-800 text-sm mt-1">{ratingsAvg}</span>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStarOutline />
          <span className="text-sm text-gray-700 ml-2 mt-1">(124 reviews)</span>
        </p>
        <p className="w-3/4 line-clamp-3">
         {description}
        </p>
        <hr className="w-3/4 text-gray-400" />
        <p className="text-indigo-800 font-semibold text-2xl">{price} ₹</p>
        <p className="text-sm">inclusive all taxes</p>
        <div className="w-3/4 space-y-3">
          <button className="smooth-transition hover:bg-blue-700 pointer py-2 bg-blue-600 text-white w-full">
            Add to Cart
          </button>
          <button className="smooth-transition hover:bg-gray-300 pointer py-2 border-gray-400 border w-full">
            Buy Now
          </button>
        </div>
        <div className="flex gap-1 items-center mt-5">
          <p className="font-semibold">Seller email:</p>
          <p className="text-gray-600">{email}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-semibold">Seller Contact:</p>
          <p className="text-gray-600">+91 26874954836</p>
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
          <p>
            {about}
          </p>
        </div>
      </div>
    );
}

export default ProductDetailSection
