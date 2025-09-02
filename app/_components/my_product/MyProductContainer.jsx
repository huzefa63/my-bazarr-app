import { BiSolidPackage } from "react-icons/bi";
import MyProductItem from "./MyProductItem";
function MyProductContainer() {
    return (
      <div className="h-full w-[90%] bg-white shadow-sm  py-3 overflow-auto rounded-md">
        <header className="text-3xl flex items-center gap-5 pl-5">
          <BiSolidPackage className="text-yellow-950" /> My Products
        </header>
        <hr className="text-gray-200 my-5" />
        <div className="w-full h-full">
          <MyProductItem />
          <MyProductItem />
          <MyProductItem />
          <MyProductItem />
          <MyProductItem />
        </div>
      </div>
    );
}

export default MyProductContainer
