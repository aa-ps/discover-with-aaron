import BlogContainer from "@/components/Blog/container";
import { BlogMetadata, getBlogPosts } from "@/utils/blog-tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Look at the latest posts posted by the blogger!",
};

export default function Blog() {
  const posts = getBlogPosts();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 my-8">Posts</h1>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post: BlogMetadata, i: number) => (
          <BlogContainer data={post} key={i} />
        ))}
      </div>
    </div>
  );
}
