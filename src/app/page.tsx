
import Link from "../../node_modules/next/link";
import getPostMetadata from "./components/getPostMetadata";
import PostPreview from "./components/PostPreview";

export default function Home() {
  
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => 
    <PostPreview key={post.slug} {...post} />
  )
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {postPreviews}
    </div>
  )
}
