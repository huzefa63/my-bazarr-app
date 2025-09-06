'use client';

import Link from "next/link";
import { useState } from "react";

function MyProductItem({image,name,price,description,id}) {
    const [isHover,setIsHover] = useState(true);
    const link =
      "https://images.pexels.com/photos/10250614/pexels-photo-10250614.jpeg";
  return (
    <Link href={`/app/product/${id}`} className={`${isHover && 'hover:bg-gray-100'} py-3 smooth-transition px-5 border-b border-gray-200 w-full h-[25%] pb-5 flex items-center gap-5 pr-3`}>
      <div className="min-w-1/12 h-full overflow-hidden rounded-md">
        <img src={image} alt="" className="w-full h-full object-fit"/>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl">{name}</h1>
        <p className="text-lg text-gray-700">{price} rs</p>
        <p className="line-clamp-1 text-gray-600 text-sm">{description}</p>
        <p className="text-gray-500 text-sm">MB #{id}</p>
      </div>
      <button onMouseEnter={()=>setIsHover(false)} onMouseLeave={()=>setIsHover(true)} className="px-5 ml-auto py-1 shadow-sm border border-gray-200 rounded-sm min-w-fit smooth-transition hover:bg-gray-200 bg-gray-100">Edit</button>
    </Link>
  );
}

export default MyProductItem
