"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Something went wrong
        </h2>
        <p className="mt-6 text-lg leading-7 text-gray-600">
          An error occurred while loading this page.
        </p>
        {error.digest && (
          <pre className="mt-4 p-4 bg-gray-100 rounded text-sm text-gray-700">
            {error.digest}
          </pre>
        )}
        <div className="mt-10">
          <button
            onClick={reset}
            className="rounded-md bg-theme-darkblue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}
