import formatCurrency from "@/helpers/formatCurrency";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
function ProductCard({ image,description,name,id,rating,price,inCart=false }) {
  return (
    <div
      data-id={id}
      className="parent h-[530px] shadow-[0_0_20px_rgba(0,0,0,0.2)] p-3 rounded-md hover:cursor-pointer hover:bg-white lg:hover:-translate-y-1 duration-300 transition-all"
    >
      <Link href={`/app/product/${id}`}>
        <div className="h-[60%] ">
          <img className="h-full w-full" src={image} />
        </div>
      </Link>
      <Link
        href={`/app/product/${id}`}
        className="mt-1 flex flex-col gap-2 px-3"
      >
        <h1 className="truncate w-[70%] font-bold tracking-wide">{name}</h1>
        <div className="space-x-2">
          <p className="inline-block">{formatCurrency(price - (price * 0.1))}</p>
          <p className="text-gray-800 inline-block text-xs self-end line-through">{formatCurrency(price)}</p>
          <p className="text-xs text-green-500 inline-block">10% off</p>
        </div>
        <p className="text-xs text-gray-800">⭐{rating.toFixed(1)}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </Link>
      {!inCart && <button
      type="button"
        className="add mt-7 flex w-full items-center justify-center gap-1 hover:bg-yellow-500 hover:cursor-pointer transition-all duration-300 ease-in-out bg-yellow-400 text-[var(--text)] px-3 py-2 rounded-full"
      >
        <BsCart2 className="add" /> add to cart
      </button>}
      {inCart && <button
      type="button"
        className="mt-7 flex w-full items-center justify-center gap-1 transition-all duration-300 ease-in-out bg-orange-400 text-gray-800 px-3 py-2 rounded-full"
      >
        <BsCart2 className="add" /> already in cart
      </button>}
      <input type="text" hidden value={id} name="id" readOnly />
    </div>
  );
}

export default ProductCard;
