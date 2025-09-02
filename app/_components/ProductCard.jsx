import { BsCart2 } from "react-icons/bs";
function ProductCard({ image }) {
  return (
    <div className="h-[500px] shadow-[0_0_20px_rgba(0,0,0,0.2)] p-3 rounded-md hover:cursor-pointer hover:bg-white hover:-translate-y-1 duration-300 transition-all">
      <div className="h-[60%] ">
        <img className="h-full w-full" src={image} />
      </div>
      <div className="mt-1 flex flex-col gap-2 px-3">
        <h1 className="truncate w-[70%] font-bold tracking-wide">
          Wireless Headphones
        </h1>
        <p className="text-sm text-gray-800">₹1599</p>
        <p className="text-xs text-gray-800">⭐4.2</p>
        <p className="text-sm text-gray-500 line-clamp-2">
          high quality wireless headphones with noice cancellation sfdsfsd
          sdfsdf sdfsdf sdfsdfsdfsdf fdsf
        </p>
        <button className="flex items-center justify-center gap-1 hover:bg-yellow-500 hover:cursor-pointer transition-all duration-300 ease-in-out bg-yellow-400 text-[var(--text)] px-3 py-2 rounded-full">
          <BsCart2 /> add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
