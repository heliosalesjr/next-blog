
import getPostMetadata from "./components/getPostMetadata";
import PostPreview from "./components/PostPreview";

export default function Home() {
  
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => 
    <PostPreview key={post.slug} {...post} />
  )
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2">
      {postPreviews}
    </div>
  )
}
