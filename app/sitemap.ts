import { getBlogPosts } from "@/utils/blog-tools";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://www.discoverwithaaron.com/";
  const posts = getBlogPosts();
  console.log(posts)
  return posts.map((post) => ({
    url: BASE_URL + "blog/ " + post.slug,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));
}
