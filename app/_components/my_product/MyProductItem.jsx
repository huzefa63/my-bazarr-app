'use client';

import formatCurrency from "@/helpers/formatCurrency";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import LoadingButton from "../UI/LoadingButton";
import axios from "axios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

function MyProductItem({image,name,price,description,id,createdAt}) {
    const [isHover,setIsHover] = useState(true);
    const queryClient = useQueryClient();
    async function deleteProduct(){
      try{
        await axios.delete(`${process.env.NEXT_PUBLIC_URL}/product/deleteProduct/${id}`,{withCredentials:true});
        toast.success('your product deleted successfully');
        queryClient.refetchQueries(['myProducts']);
      }catch(err){
        toast.error('failed to delete product please try again!');
      }
    }
  return (
    <div
      className={`${
        isHover && "hover:bg-gray-100"
      } py-3 rounded-md overflow-hidden relative smooth-transition px-5 border border-gray-200 w-full h-[25%] pb-5 flex items-center gap-5 pr-3`}
    >
      <Link
        href={`/app/product/${id}`}
        className="lg:h-30 h-25 min-w-25 max-w-25 lg:min-w-40 lg:max-w-40 overflow-hidden rounded-md"
      >
        <img src={image} alt="" className="w-full h-full object-cover" />
      </Link>
      <Link href={`/app/product/${id}`} className="space-y-2 lg:min-w-3/4 lg:max-w-full min-w-[55%] max-w-[55%]">
        <h1 className="lg:text-xl font-bold text-gray-800 text-sm line-clamp-1">{name}</h1>
        <p className="lg:text-sm text-xs text-gray-900">{formatCurrency(price)} rs</p>
        <p className="line-clamp-1 text-gray-600 lg:text-sm text-xs">
          {format(createdAt, "d   MMM, yyyy")}
        </p>
        <p className="text-red-700 text-xs lg:text-sm ">#{id}</p>
      </Link>
      <div
        className="lg:relative lg:top-0 lg:-translate-y-0 lg:right-0 absolute right-3 top-1/2 -translate-y-1/2"
        onMouseEnter={() => setIsHover(false)}
        onMouseLeave={() => setIsHover(true)}
      >
        <LoadingButton
          onClick={deleteProduct}
          className="lg:px-3 px-2 text-xs lg:text-sm ml-auto py-1 shadow-sm border border-gray-200 rounded-sm min-w-fit smooth-transition text-white hover:bg-red-600 bg-red-500"
        >
          <span className=" flex items-center gap-2">
            <FaTrash /> delete
          </span>
        </LoadingButton>
      </div>
    </div>
  );
}

export default MyProductItem
