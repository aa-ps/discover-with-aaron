import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="px-6 py-24 sm:py-32 lg:px-8 prose">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Blog Not Found
        </h1>
        <p className="mt-6 text-base leading-7 ">
          Bruh, how did you even get here?
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Take me home!
          </Link>
        </div>
      </div>
    </main>
  );
}
