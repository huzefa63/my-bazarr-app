import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
function ProductCard({ image,description,name,id,rating,price }) {
  return (
    <div data-id={id} className="parent h-[500px] shadow-[0_0_20px_rgba(0,0,0,0.2)] p-3 rounded-md hover:cursor-pointer hover:bg-white hover:-translate-y-1 duration-300 transition-all">
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
        <p className="text-sm text-gray-800">₹{price}</p>
        <p className="text-xs text-gray-800">⭐{rating}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </Link>
        <button
          type="submit"
          className="add flex w-full items-center justify-center gap-1 hover:bg-yellow-500 hover:cursor-pointer transition-all duration-300 ease-in-out bg-yellow-400 text-[var(--text)] px-3 py-2 rounded-full"
        >
          <BsCart2 className="add"/> add to cart
        </button>
        <input type="text" hidden value={id} name="id" readOnly />
    </div>
  );
}

export default ProductCard;
