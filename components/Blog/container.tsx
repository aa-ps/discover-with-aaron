import { BlogMetadata } from "@/utils/blog-tools";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogContainer({ data }: { data: BlogMetadata }) {
  return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-theme-darkblue dark:border-gray-700 relative flex flex-col h-[400px]">
      <div className="w-full h-full relative">
        <Link href={`/blog/${data.slug}`}>
          <Image
            className="rounded-t-lg object-cover"
            src={`/images/${data.slug}/${data.img}.webp`}
            alt={`${data.img} Blog Image`}
            fill
            quality={100}
          />
        </Link>
      </div>
      <div className="p-5 flex flex-col gap-1 h-full">
        <Link href={`/blog/${data.slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-slate-100">
            {data.title}
          </h5>
        </Link>
        <div>
          <ul className="flex gap-2">
            {data.tags.map((tag: String, i: number) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer p-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-theme-darkblue dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="my-2 font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {data.desc}
        </p>
        <Link
          href={`/blog/${data.slug}`}
          className="inline-flex items-center w-fit px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read More
          <FaArrowRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
        </Link>
      </div>
    </div>
  );
}
