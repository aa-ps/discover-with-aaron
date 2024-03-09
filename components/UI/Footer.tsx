import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shadow dark:bg-gray-800 w-full">
      <div className="flex flex-col items-center justify-center mx-auto max-w-screen-xl p-4 md:flex md:flex-row md:items-center md:justify-between sm:flex">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link
            href="https://discoverwithaaron.com"
            className="hover:underline"
          >
            Discover With Aaron
          </Link>
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <Link
            href={"/"}
            aria-label="Home Page"
            className="hover:underline me-4 md:me-6"
          >
            Home
          </Link>
          <Link
            href={"/blog"}
            aria-label="Blog Page"
            className="hover:underline me-4 md:me-6"
          >
            Blog
          </Link>
          <Link
            href="/about"
            aria-label="About Page"
            className="hover:underline"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
