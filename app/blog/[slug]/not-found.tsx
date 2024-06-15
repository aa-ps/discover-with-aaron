import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Blog Not Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Oops! It seems you have reached a page that doesn&apos;t exist.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-theme-darkblue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Take me home!
          </Link>
        </div>
      </div>
    </main>
  );
}
