'use client';

import { useState } from "react";

function MyProductItem() {
    const [isHover,setIsHover] = useState(true);
    const link =
      "https://images.pexels.com/photos/10250614/pexels-photo-10250614.jpeg";
  return (
    <div className={`${isHover && 'hover:bg-gray-100'} py-3 smooth-transition px-5 border-b border-gray-200 w-full h-[25%] pb-5 flex items-center justify-between gap-5 pr-3`}>
      <div className="min-w-1/12 h-full overflow-hidden rounded-md">
        <img src={link} alt="" className="w-full h-full object-fit"/>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl">Comfortable T-shirt</h1>
        <p className="text-lg text-gray-700">1,599 rs only</p>
        <p className="line-clamp-1 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis facere quis libero repudiandae laudantium cupiditate molestias repellendus ratione, necessitatibus consequuntur dolor voluptas minima nesciunt natus, ex saepe animi quia.</p>
        <p className="text-gray-500 text-sm">SKU #WKH-2024</p>
      </div>
      <button onMouseEnter={()=>setIsHover(false)} onMouseLeave={()=>setIsHover(true)} className="px-5 py-1 shadow-sm border border-gray-200 rounded-sm min-w-fit smooth-transition hover:bg-gray-200 bg-gray-100">Edit</button>
    </div>
  );
}

export default MyProductItem
