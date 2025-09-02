import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward, IoMdArrowDropright } from "react-icons/io";

function OrderItem() {
    const link =
      "https://images.pexels.com/photos/10250614/pexels-photo-10250614.jpeg";
    return (
      <div className="smooth-transition hover:bg-gray-100 w-full relative h-[35%] border border-gray-200 rounded-md p-4 flex flex-col gap-5 overflow-hidde">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 bg-orange-100 w-fit px-3 rounded-full text-orange-400 text-sm">
            <div className="h-2 w-2 rounded-full bg-orange-400"></div>
            <p>in progress</p>
          </div>
          <span className="text-gray-400">|</span>
          <p className="text-sm text-gray-600">10 May, 2025</p>
        </div>
        <div className="flex gap-5">
          <div className="w-20 h-20  rounded-md  overflow-hidden">
            <img src={link} alt="" className="w-full max-h-full object-cover" />
          </div>

          <div className="space-y-1 text-sm h-fit">
            <p className="font-bold text-red-800">Order ID: ABC-274683274</p>
            <p>Nothing just a fance photo of a shirt</p>
            <p>2,999 rs only</p>
          </div>
          <button className="absolute right-10 top-1/2 -translate-y-1/2 text-2xl">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    );
}

export default OrderItem
