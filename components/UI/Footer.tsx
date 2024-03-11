import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="shadow dark:bg-theme-darkblue w-full">
      <div className="flex flex-col items-center justify-center mx-auto max-w-screen-xl p-4 md:flex md:flex-row md:items-center md:justify-between sm:flex">
        <span className="text-sm text-theme-gray sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link
            href="https://discoverwithaaron.com"
            className="hover:underline"
          >
            Discover With Aaron
          </Link>
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-theme-gray dark:text-gray-400 sm:mt-0">
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
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-theme-gray dark:text-gray-400 sm:mt-0">
          <Link
            href={"https://github.com/aa-ps"}
            aria-label="GitHub Profile"
            className="me-4 md:me-6"
          >
            <FaGithubSquare className="h-6 w-6 hover:text-theme-gray" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/aaron-pulido-salinas/"}
            aria-label="LinkedIn Profile"
            className="me-4 md:me-6"
          >
            <FaLinkedin className="h-6 w-6 hover:text-theme-gray" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
