import CopyButton from "@/components/Blog/copy";
import { getBlogData, getBlogPosts } from "@/utils/blog-tools";
import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogData = getBlogData(params.slug);

  if (!blogData) {
    notFound();
  }

  return {
    metadataBase: new URL("https://discoverwithaaron.com"),
    title: blogData.title,
    description: blogData.desc,
    authors: [{ name: "Aaron" }],
    openGraph: {
      title: blogData.title,
      description: blogData.desc,
      type: "article",
      images: [
        {
          url: `/images/${blogData.slug}/${blogData.img}.webp`,
          width: 800,
          height: 600,
          alt: blogData.title,
        }
      ],
      url: `https://discoverwithaaron.com/blog/${blogData.slug}`
      
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blogData = getBlogData(params.slug);

  if (!blogData) {
    notFound();
  }

  const formattedDate = moment(blogData.date).format("MMMM Do, YYYY");

  return (
    <article className="prose lg:prose-xl sm:prose-sm">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1(props) {
            const { node, ...rest } = props;
            return (
              <div>
                <h1 className="p-0 mb-2" {...rest} />
                <p className="p-0 m-0 font-medium">{formattedDate}</p>
              </div>
            );
          },
          img(props) {
            const { node, ...rest } = props;
            return (
              <img
                className="rounded-lg shadow-lg border-4 border-theme-darkblue transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                {...rest}
              />
            );
          },
          pre(props) {
            const { children } = props;
            let code = "";
            if (React.isValidElement(children)) {
              const childProps = children.props as {
                children: React.ReactNode;
              };
              if (typeof childProps.children === "string") {
                code = childProps.children;
              }
            }

            return (
              <div className="max-w-sm md:max-w-none relative shadow-md">
                <CopyButton code={code}></CopyButton>
                <pre className="leading-normal">{children}</pre>
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
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return paths;
}
