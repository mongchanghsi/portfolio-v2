import { BlogPost } from "@/services/contentful/types";
import { GenericContainer, GenericContent } from "../GenericLayout";
import {
  BlogCardCategories,
  BlogHeroImage,
  BlogPostAuthor,
  BlogPostBody,
  BlogPostTitle,
  BlogWrapper,
} from "./style";
import { marked } from "marked";
import { formatDate } from "@/utils/format";
import Image from "next/image";
import BlogCategory from "@/components/Blog/BlogCategory";

type Props = {
  post: BlogPost;
};

const BlogPostView = ({ post }: Props) => {
  const html = marked.parse(post.body);

  return (
    <GenericContainer>
      <GenericContent style={{ maxWidth: "1000px" }}>
        <BlogWrapper>
          {post.heroImage && (
            <BlogHeroImage>
              <Image
                src={post.heroImage.url}
                alt={post.heroImage.title || post.title}
                fill
                className="object-cover"
                priority
              />
            </BlogHeroImage>
          )}
          {post.categoriesCollection &&
            post.categoriesCollection?.items?.length > 0 && (
              <BlogCardCategories>
                {post.categoriesCollection.items.map((category) => (
                  <BlogCategory category={category.name || ""} />
                ))}
              </BlogCardCategories>
            )}
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
