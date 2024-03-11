import { getBlogData, getBlogPosts } from "@/utils/blog-tools";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export async function generateMetadata(
  {
    params,
  }: {
    params: { slug: string };
  }
): Promise<Metadata> {
 
  const blogData = getBlogData(params.slug);

  if (!blogData) {
    notFound();
  }

  return {
    title: blogData.title,
    description: blogData.desc,
    authors: [{ name: "Aaron" }],
    openGraph: {
      title: blogData.title,
      description: blogData.desc,
      type: "article",
      images: `/images/${blogData.img}.webp`
    }
  };
}

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  
  const blogData = getBlogData(params.slug);

  if (!blogData) {
    notFound();
  }
  
  return (
    <article className="prose lg:prose-xl sm:prose-sm">
      <Markdown components={{
        pre(props){
          const {node, ...rest} = props;
          return <pre className="max-w-sm md:max-w-none" {...rest} />
        }
      }}>{blogData.html}</Markdown>
    </article>
  );
}


export async function generateStaticParams() {
  const posts = getBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}