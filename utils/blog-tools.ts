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

const POSTS_DIR = path.join(process.cwd(), 'posts');

const getFileNameWithoutExtension = (fileName: string): string => fileName.replace(".md", "");

const parseMarkdownFile = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return matter(fileContent);
}

export const getBlogPosts = (): BlogMetadata[] => {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const { data } = parseMarkdownFile(path.join(POSTS_DIR, fileName));
      return {
        title: data.title,
        date: data.date,
        desc: data.desc,
        img: data.img,
        tags: data.tags,
        slug: getFileNameWithoutExtension(fileName),
        html: "",
      };
    });
};

export const getBlogData = (slug: string): BlogMetadata | null => {
  try {
    const { data, content } = parseMarkdownFile(path.join(POSTS_DIR, `${slug}.md`));
    return {
      title: data.title,
      date: data.date,
      desc: data.desc,
      img: data.img,
      tags: data.tags,
      slug: slug,
      html: content,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
