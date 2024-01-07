import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="bg-slate-800 rounded-lg py-4">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-300 ">{post.data.title}</h1>
        <p className="text-slate-300 mt-2">{post.data.date}</p>
      </div>

      <article className="prose prose-invert m-8">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;