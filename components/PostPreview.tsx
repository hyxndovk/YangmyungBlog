import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import "../src/app/globals.css";

const PostPreview = (props: PostMetadata) => {
    return <div className="Posts">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="PostTitle">{props.title}</h2>
      </Link>
      <p className="PostSubtitle">{props.subtitle}</p>
      <p className="PostDate">{props.date}</p>
    </div>
}

export default PostPreview;