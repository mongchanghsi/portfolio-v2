import { BlogPost } from "@/services/contentful/types";
import { GenericContainer, GenericContent } from "../GenericLayout";
import { BlogPostBody, BlogPostTitle, BlogWrapper } from "./style";
import { marked } from "marked";

type Props = {
  post: BlogPost;
};

const BlogPostView = ({ post }: Props) => {
  const html = marked.parse(post.body);

  return (
    <GenericContainer>
      <GenericContent>
        <BlogWrapper>
          <BlogPostTitle>{post.title}</BlogPostTitle>
          <BlogPostBody dangerouslySetInnerHTML={{ __html: html }} />
        </BlogWrapper>
      </GenericContent>
    </GenericContainer>
  );
};

export default BlogPostView;
