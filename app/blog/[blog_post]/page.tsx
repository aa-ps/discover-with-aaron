import { getBlogHTML } from "@/utils/blog-tools";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export default function BlogPost({
  params,
}: {
  params: { blog_post: string };
}) {
  let blogHtml = getBlogHTML(params.blog_post);
  if (blogHtml == "") {
    notFound();
  }
  return (
    <article className="prose lg:prose-xl sm:prose-sm">
      <Markdown>{blogHtml}</Markdown>
    </article>
  );
}
