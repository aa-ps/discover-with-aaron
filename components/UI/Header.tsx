"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-theme-darkblue w-full">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <IoIosMenu aria-label="Navigation Menu" className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center text-white font-bold text-2xl">
              Discover With Aaron
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className={"sm:hidden"} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 flex justify-around items-center ">
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
          </div>
        </div>
      )}
    </nav>
  );
}
