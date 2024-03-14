import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface BlogMetadata {
  title: string;
  date: string;
  desc: string;
  img: string;
  tags: string[];
  slug: string;
  html: string;
}

export const getBlogPosts = (): BlogMetadata[] => {
  return fs
    .readdirSync("posts")
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => {
      const { data } = matter(fs.readFileSync(`posts/${fileName}`, "utf-8"));
      return {
        title: data.title,
        date: data.date,
        desc: data.desc,
        img: data.img,
        tags: data.tags,
        slug: fileName.replace(".md", ""),
        html: "",
      };
    });
};

export const getBlogData = (slug: string): BlogMetadata | null => {
  try {
    const fixedPath = path.join(process.cwd(), 'posts');
    const { data, content } = matter(
      fs.readFileSync(`${fixedPath}/${slug}.md`, "utf-8")
    );
    return {
      title: data.title,
      date: data.date,
      desc: data.desc,
      img: data.img,
      tags: data.tags,
      slug: slug,
      html: content,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
};
