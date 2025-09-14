'use client';
import CustomLink from "./CustomLink";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {
  FaStore,
  FaBox,
  FaPlus,
  FaShoppingCart,
  FaClipboardList,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function AppNav() {
  const [menuOpen,setMenuOpen] = useState(false);
  const pathname = usePathname();
    return (
      <>
        <div className="lg:hidden border-b z-50 relative border-gray-100 w-full shadow-sm h-16 text-[var(--text)] bg-[var(--surface)] flex items-center pl-5 pr-10 justify-between">
          {/* Logo */}
          <img src="/logo.png" alt="logo" className="w-36" />

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-md smooth-transition hover:bg-gray-200 lg:hidden"
          >
            {menuOpen ? (
              <RxCross2 className="text-xl" />
            ) : (
              <RxHamburgerMenu className="text-xl" />
            )}
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden absolute h-fit top-16 bg-white flex flex-col left-0 w-full gap-6 text-lg p-5 shadow-md animate-slide-down">
              {/* Browse */}
              <Link
                href="/app/browse"
                className={`flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md ${
                  pathname === "/app/browse" && "bg-gray-200"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <FaBox /> Browse
              </Link>

              {/* My Store */}
              <div>
                <h1 className="font-semibold flex items-center gap-2">
                  <FaStore /> My Store
                </h1>
                <ul className="flex flex-col ml-5 gap-3 mt-3">
                  <Link
                    href="/app/my-store/items"
                    className={`hover:bg-gray-200 p-2 rounded-md flex items-center gap-2 ${
                      pathname === "/app/my-store/items" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaBox /> My Items
                  </Link>

                  <Link
                    href="/app/my-store/received-orders"
                    className={`hover:bg-gray-200 p-2 rounded-md flex items-center gap-2 ${
                      pathname === "/app/my-store/received-orders"
                        ? "bg-gray-200"
                        : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaClipboardList /> My Orders
                  </Link>

                  <Link
                    href="/app/my-store/add-item"
                    className={`hover:bg-gray-200 p-2 rounded-md flex items-center gap-2 ${
                      pathname === "/app/my-store/add-item" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaPlus /> Add Item
                  </Link>
                </ul>
              </div>

              {/* Purchases */}
              <div>
                <h1 className="font-semibold flex items-center gap-2">
                  <FaShoppingCart /> Purchases
                </h1>
                <ul className="flex flex-col ml-5 gap-3 mt-3">
                  <Link
                    href="/app/purchases/orders"
                    className={`hover:bg-gray-200 p-2 rounded-md flex items-center gap-2 ${
                      pathname === "/app/purchases/orders" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaClipboardList /> Orders
                  </Link>

                  <Link
                    href="/app/purchases/cart"
                    className={`hover:bg-gray-200 p-2 rounded-md flex items-center gap-2 ${
                      pathname === "/app/purchases/cart" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaShoppingCart /> Cart
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="hidden border-b border-gray-100 w-full shadow-sm h-16 text-[var(--text)] bg-[var(--surface)] lg:flex items-center overflow-hidden pl-5 pr-10 justify-between">
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
      </>
    );
}

export default AppNav
