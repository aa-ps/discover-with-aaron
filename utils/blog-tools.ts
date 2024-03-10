import fs from "fs";
import matter from "gray-matter";

export interface BlogMetadata {
  title: string;
  date: string;
  desc: string;
  img: string;
  tags: string[];
  slug: string;
}

export interface BlogData{
  title: string;
  date: string;
  desc: string;
  img: string;
  tags: string[];
  slug: string;
  html: string;
}

export const getBlogPosts = (): BlogMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts: BlogMetadata[] = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    const post: BlogMetadata = {
      title: matterResult.data.title,
      date: matterResult.data.date,
      desc: matterResult.data.desc,
      img: matterResult.data.img,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
    return post;
  });
  return posts;
};

export const getBlogData = (slug: string): BlogData | undefined => {
  try{
    const fileContents = fs.readFileSync(`posts/${slug}.md`, "utf-8");
    const matterResult = matter(fileContents);
    const data: BlogData = {
      title: matterResult.data.title,
      date: matterResult.data.date,
      desc: matterResult.data.desc,
      img: matterResult.data.img,
      tags: matterResult.data.tags,
      slug: slug,
      html: matterResult.content,
    }
    return data;
  } catch(e){
    console.log(e);
  }
}
