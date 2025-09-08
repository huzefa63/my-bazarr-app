import CustomLink from "./CustomLink";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

function AppNav() {
    return (
      <div className="border-b border-gray-100 w-full shadow-sm h-16 text-[var(--text)] bg-[var(--surface)] flex items-center overflow-hidden pl-5 pr-10 justify-between">
        <img src="/logo.png" alt="logo" className="w-36 " />
        <ul className="flex items-center gap-10 text-lg">
          <CustomLink
            styles="px-4 py-2"
            href="/app/browse"
            text="browse"
            icon={<FaGlobe />}
          />
          <CustomLink
            styles="px-4 py-2"
            href="/app/my-store/items"
            nestedHref="/app/my-store/add-item"
            secondNested="/app/my-store/received-orders"
            text="My store"
            icon={<IoStorefrontSharp />}
          />
          <CustomLink
            styles="px-4 py-2"
            href="/app/purchases/orders"
            nestedHref="/app/purchases/cart"
            text="purchases"
            icon={<FaCartShopping />}
          />
          <CustomLink
            styles="px-4 py-2"
            href="/app/profile"
            text="profile"
            icon={<IoMdPerson />}
          />
        </ul>
      </div>
    );
}

export default AppNav
