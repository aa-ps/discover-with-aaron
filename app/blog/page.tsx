import BlogContainer from "@/components/Blog/container";
import { BlogMetadata, getBlogPosts } from "@/utils/blog-tools";

export default function Blog() {
  const posts = getBlogPosts();
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post: BlogMetadata, i: number) => {
          return <BlogContainer data={post} key={i} />;
        })}
      </div>
    </div>
  );
}
