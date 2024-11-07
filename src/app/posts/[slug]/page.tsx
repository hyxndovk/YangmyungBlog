import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";
import "../../../app/globals.css";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const post = getPostMetadata();
    return post.map((post) => ({
        slug: post.slug,
    }));
};


const Postpage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return(
        <div className="PostPage">
            <h1 className="inPostTitle">{post.data.title}</h1>
            <div className="PostContent">
                <Markdown>{post.content}</Markdown>
            </div>
        </div>
    )
}

export default Postpage