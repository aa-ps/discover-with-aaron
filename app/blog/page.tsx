import BlogContainer from "@/components/Blog/container";
import { BlogMetadata, getBlogPosts } from "@/utils/blog-tools"

export default function Blog() {
  const posts = getBlogPosts();
  return (
    <div>
      {posts.map((post: BlogMetadata, i: number) => {
        return <BlogContainer data={post} key={i}/>
      })}
    </div>
  );
}
