import fs from "fs";
import matter from "gray-matter";

export interface PostData {
  title: String;
  date: String;
  desc: String;
  img: String;
  tags: String[];
  slug: String;
}

export const getBlogPosts = (): PostData[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts: PostData[] = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    const post: PostData = {
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

export const getBlogHTML = (slug: String): string => {
  try{
    const fileContents = fs.readFileSync(`posts/${slug}.md`, "utf-8");
    const matterResult = matter(fileContents);
    return matterResult.content;
  } catch(e){
    console.error(e);
    return "";
  }
}
