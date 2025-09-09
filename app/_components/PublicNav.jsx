"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function PublicNav() {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/auth/login", label: "Login" },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
      <img src="/logo.png" alt="logo" className="w-32 mt-2 absolute" />
      <div></div>
      <nav className="flex gap-6 text-gray-700 font-medium">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              pathname === href
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "hover:text-blue-600"
            } pb-1`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default PublicNav;
