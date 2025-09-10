'use client';

import formatCurrency from "@/helpers/formatCurrency";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";

function MyProductItem({image,name,price,description,id,createdAt}) {
    const [isHover,setIsHover] = useState(true);
  return (
    <Link href={`/app/product/${id}`} className={`${isHover && 'hover:bg-gray-100'} py-3 rounded-md smooth-transition px-5 border border-gray-200 w-full h-[25%] pb-5 flex items-center gap-5 pr-3`}>
      <div className="h-30 w-40 overflow-hidden rounded-md">
        <img src={image} alt="" className="w-full h-full object-fit"/>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl">{name}</h1>
        <p className="text-sm text-gray-900">{formatCurrency(price)} rs</p>
        <p className="line-clamp-1 text-gray-600 text-sm">{format(createdAt,'d MMM, yyyy')}</p>
        <p className="text-gray-500 text-sm">MB #{id}</p>
      </div>
      <button onMouseEnter={()=>setIsHover(false)} onMouseLeave={()=>setIsHover(true)} className="px-5 ml-auto py-1 shadow-sm border border-gray-200 rounded-sm min-w-fit smooth-transition hover:bg-gray-200 bg-gray-100">Edit</button>
    </Link>
  );
}

export default MyProductItem
