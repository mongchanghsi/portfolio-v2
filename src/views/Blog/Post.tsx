import { BlogPost } from "@/services/contentful/types";
import { GenericContainer, GenericContent } from "../GenericLayout";
import {
  BlogPostAuthor,
  BlogPostBody,
  BlogPostTitle,
  BlogWrapper,
} from "./style";
import { marked } from "marked";
import { formatDate } from "@/utils/format";

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
          <BlogPostAuthor>
            Written by {post.author?.name} on {formatDate(post.publishDate)}
          </BlogPostAuthor>
        </BlogWrapper>
      </GenericContent>
    </GenericContainer>
  );
};

export default BlogPostView;
