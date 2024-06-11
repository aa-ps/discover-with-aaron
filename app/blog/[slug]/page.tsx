import CopyButton from "@/components/Blog/copy";
import { getBlogData, getBlogPosts } from "@/utils/blog-tools";
import dayjs from "dayjs";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";

async function fetchMetadata(slug: string): Promise<Metadata> {
  const blogData = getBlogData(slug);

  if (!blogData) {
    notFound();
  }

  const { title, desc, slug: blogSlug, img } = blogData;
  const baseURL = new URL("https://discoverwithaaron.com");

  return {
    metadataBase: baseURL,
    title,
    description: desc,
    authors: [{ name: "Aaron" }],
    openGraph: {
      title,
      description: desc,
      type: "article",
      images: [
        {
          url: `${baseURL.origin}/images/${blogSlug}/${img}.webp`,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      url: `${baseURL.origin}/blog/${blogSlug}`,
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return await fetchMetadata(params.slug);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blogData = getBlogData(params.slug);

  if (!blogData) {
    notFound();
  }

  const formattedDate = dayjs(blogData.date).format("MMMM D, YYYY");

  return (
    <article className="prose lg:prose-xl sm:prose-sm">
      <Markdown
        components={{
          h1: ({ node, ...props }) => (
            <div>
              <h1 className="p-0 mb-2" {...props} />
              <p className="p-0 m-0 font-medium">{formattedDate}</p>
            </div>
          ),
          img: ({ node, src, alt, width, height, ...props }) => (
            <Image
              className="mx-auto rounded-lg shadow-lg border-4 border-theme-darkblue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              src={src!}
              alt={alt!}
              width={600}
              height={600}
              {...props}
            />
          ),
          pre: ({ children, ...props }) => {
            let code = "";
            if (React.isValidElement(children)) {
              const childProps = children.props as { children: React.ReactNode };
              if (typeof childProps.children === "string") {
                code = childProps.children;
              }
            }

            return (
              <div className="max-w-sm md:max-w-none relative shadow-md">
                <CopyButton code={code} />
                <pre className="leading-normal" {...props}>{children}</pre>
              </div>
            );
          },
        }}
      >
        {blogData.html}
      </Markdown>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}
