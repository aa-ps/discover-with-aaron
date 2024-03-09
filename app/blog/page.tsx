import BlogContainer from "@/components/Blog/container";
import { PostData, getBlogPosts } from "@/utils/blog-tools"

export default function Blog() {
  const posts = getBlogPosts();
  return (
    <div>
      {posts.map((post: PostData, i: number) => {
        return <BlogContainer data={post} key={i}/>
      })}
    </div>
  );
}
