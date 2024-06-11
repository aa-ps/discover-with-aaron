import { BlogMetadata } from "@/utils/blog-tools";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogContainer({ data }: { data: BlogMetadata }) {
  const formattedDate = dayjs(data.date).format("MMMM D, YYYY");

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-theme-darkblue dark:border-gray-700 flex flex-col h-[400px]">
      <Link href={`/blog/${data.slug}`} className="relative w-full h-[200px]">
        <Image
          className="rounded-t-lg object-cover"
          src={`/images/${data.slug}/${data.img}.webp`}
          alt={`${data.img} Blog Image`}
          fill
          quality={100}
        />
      </Link>
      <div className="p-5 flex flex-col gap-1 flex-grow">
        <Link href={`/blog/${data.slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-slate-100">
            {data.title}
          </h5>
        </Link>
        <ul className="flex gap-2 mb-2">
          {data.tags.map((tag: string, i: number) => (
            <li
              key={i}
              className="cursor-pointer p-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-theme-darkblue dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:z-10"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="my-2 font-normal text-theme-gray dark:text-gray-400 flex-grow">
          {data.desc}
        </p>
        <div className="flex items-end justify-between w-full">
          <Link
            href={`/blog/${data.slug}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read More
            <FaArrowRight className="w-3.5 h-3.5 ml-2 rtl:rotate-180" />
          </Link>
          <p className="text-xs font-medium text-theme-gray">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
