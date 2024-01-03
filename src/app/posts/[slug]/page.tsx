import fs from "fs";
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from "@/app/components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult.content;
  };

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return(
       
        
        <>
            <h1 className="text-3xl text-bold text-purple-500">This is a post: {slug}</h1>
            <Markdown>{content}</Markdown>
            
            
        </>
        
        
    );

};

export default PostPage