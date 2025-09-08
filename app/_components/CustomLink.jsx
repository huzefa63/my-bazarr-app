'use client';
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

function CustomLink({href,nestedHref,secondNested,text,icon,styles = "py-2 pl-3 w-full"}) {
    const pathname = usePathname();
    return (
      <Link
        href={href}
        className={`${styles} text-[var(--text)] transition-colors duration-300 ease-in-out  text-center rounded-sm ${
          pathname.includes(href) || pathname.includes(nestedHref) || pathname.includes(secondNested)
            ? "bg-gray-100 shadow-sm"
            : "hover:bg-gray-200 "
        }`}
      >
        <p className={`${icon && "flex"} items-center gap-1 `}>
          {icon} {text}
        </p>
      </Link>
    );
}

export default CustomLink
