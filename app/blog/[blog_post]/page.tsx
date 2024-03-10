import { getBlogData } from "@/utils/blog-tools";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export async function generateMetadata(
  {
    params,
  }: {
    params: { blog_post: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  let blogData = getBlogData(params.blog_post);

  if (!blogData) {
    notFound();
  }

  return {
    title: blogData.title,
    description: blogData.desc,
    authors: [{name: "Aaron"}],
    openGraph: {
      title: blogData.title,
      description: blogData.desc,
      type: "article",
      images: `/images/${blogData.img}.webp`
    }
  }
}

export default function BlogPost({
  params,
}: {
  params: { blog_post: string };
}) {
  let blogData = getBlogData(params.blog_post);

  if (!blogData) {
    notFound();
  }
  
  return (
    <article className="prose lg:prose-xl sm:prose-sm">
      <Markdown>{blogData.html.toString()}</Markdown>
    </article>
  );
}
