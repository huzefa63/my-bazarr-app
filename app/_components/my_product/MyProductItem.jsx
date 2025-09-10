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
      } py-3 rounded-md smooth-transition px-5 border border-gray-200 w-full h-[25%] pb-5 flex items-center gap-5 pr-3`}
    >
      <Link
        href={`/app/product/${id}`}
        className="h-30 min-w-40 max-w-40 overflow-hidden rounded-md"
      >
        <img src={image} alt="" className="w-full h-full object-fit" />
      </Link>
      <Link href={`/app/product/${id}`} className="space-y-2 w-full">
        <h1 className="text-xl">{name}</h1>
        <p className="text-sm text-gray-900">{formatCurrency(price)} rs</p>
        <p className="line-clamp-1 text-gray-600 text-sm">
          {format(createdAt, "d   MMM, yyyy")}
        </p>
        <p className="text-gray-500 text-sm">MB #{id}</p>
      </Link>
      <div
        onMouseEnter={() => setIsHover(false)}
        onMouseLeave={() => setIsHover(true)}
      >
        <LoadingButton onClick={deleteProduct} className="px-5 ml-auto py-1 shadow-sm border border-gray-200 rounded-sm min-w-fit smooth-transition text-white hover:bg-red-600 bg-red-500">
      <span className=" flex items-center gap-2">
        <FaTrash /> delete
      </span>
        </LoadingButton>
      </div>
    </div>
  );
}

export default MyProductItem
