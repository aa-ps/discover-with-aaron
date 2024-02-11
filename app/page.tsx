import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface PostData {
  title: String;
  date: String;
  subtitle: String;
  slug: String;
}

const getPostMetaData = (): PostData[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts: PostData[] = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    const post: PostData = {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
    return post;
  });

  return posts;
};

export default async function Home() {
  const posts = getPostMetaData();
  const fileContents = fs.readFileSync(`posts/introduction.md`, "utf-8");
  const matterResult = matter(fileContents);
  const post: PostData = posts[0];
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return (
    <main className="prose lg:prose-xl">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
