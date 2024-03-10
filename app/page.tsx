import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Embrace The Infinite Quest For Knowledge
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join me on an enlightening journey where curiosity reigns and
            learning never stops.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/blog"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Posts
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold px-3.5 py-2.5 text-gray-900 rounded-md bg-slate-200 hover:bg-slate-300"
            >
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
