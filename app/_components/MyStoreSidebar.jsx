'use client';
import CustomLink from "./CustomLink";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";
function MyStoreSidebar() {
  const pathname = usePathname();
    if(pathname.includes('my-store'))return (
      <div className="w-54 bg-[var(--surface)] py-5 border-r-1 border-r-gray-200">
        <ul className="flex flex-col w-full items-center px-5 gap-2">
          <CustomLink href="/app/my-store/items" text="my items" icon={<HiOutlineClipboardDocumentList />}/>
          <CustomLink href="/app/my-store/add-item" text="add items" icon={<IoMdAdd />}>add items</CustomLink>
        </ul>
      </div>
    );
    if(pathname.includes('purchases'))return (
      <div className="w-54 bg-[var(--surface)] py-5 border-r-1 border-r-gray-200">
        <ul className="flex flex-col w-full items-center px-5 gap-2">
          <CustomLink
            href="/app/purchases/orders"
            text="orders"
            icon={<PiPackageFill />}
          />
          <CustomLink
            href="/app/purchases/cart"
            text="cart"
            icon={<FaCartShopping />}
          />
        </ul>
      </div>
    );
}

export default MyStoreSidebar
