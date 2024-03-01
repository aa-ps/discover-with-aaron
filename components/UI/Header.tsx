"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header>
      <div className="font-bold text-4xl text-center w-full py-5">
        Discover With Aaron
      </div>
      <div className="w-full flex justify-center">
        <nav className="border border-black p-2 flex justify-around w-52">
          <Link
            className={path === "/" ? "nav-link-active" : "nav-link"}
            href={"/"}
            aria-label="Home Page"
          >
            Home
          </Link>
          <Link
            className={path === "/blog" ? "nav-link-active" : "nav-link"}
            href={"/blog"}
            aria-label="Blog Page"
          >
            Blog
          </Link>
          <Link
            className={path === "/about" ? "nav-link-active" : "nav-link"}
            href="/about"
            aria-label="About Page"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
