import { BlogPost } from "@/services/contentful/types";
import { BlogCardContainer, BlogCardDescription, BlogCardTitle } from "./style";
import { useRouter } from "next/router";
import { BlogCardCategories } from "@/views/Blog/style";
import BlogCategory from "../BlogCategory";
import BlogTag from "../BlogTag";

type Props = {
  data: BlogPost;
};

const BlogCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <BlogCardContainer onClick={() => router.push(`/blog/${data.slug}`)}>
      {data.categoriesCollection &&
        data.categoriesCollection?.items?.length > 0 && (
          <BlogCardCategories>
            {data.categoriesCollection.items.map((category) => (
              <BlogCategory category={category.name || ""} />
            ))}
          </BlogCardCategories>
        )}
      <BlogCardTitle>{data.title}</BlogCardTitle>
      <BlogCardDescription>{data.excerpt}</BlogCardDescription>
      {/* {data.tagsCollection && data.tagsCollection?.items?.length > 0 && (
        <BlogCardCategories>
          {data.tagsCollection.items.map((tag) => (
            <BlogTag tag={tag.name || ""} />
          ))}
        </BlogCardCategories>
      )} */}
    </BlogCardContainer>
  );
};

export default BlogCard;
