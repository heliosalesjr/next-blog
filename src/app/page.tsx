import fs from "fs";
import Link from "../../node_modules/next/link";
import matter from "gray-matter";
import { PostMetadata } from "./components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => 
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.subtitle}</p>
        <p>{post.date}</p>
      </Link>
      
    </div>
  )
  return (
    <div>
      {postPreviews}
    </div>
  )
}
