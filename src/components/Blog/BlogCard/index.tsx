import { BlogPost } from "@/services/contentful/types";
import { BlogCardContainer, BlogCardDescription, BlogCardTitle } from "./style";
import { useRouter } from "next/router";

type Props = {
  data: BlogPost;
};

const BlogCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <BlogCardContainer onClick={() => router.push(`/blog/${data.slug}`)}>
      <BlogCardTitle>{data.title}</BlogCardTitle>
      <BlogCardDescription>{data.excerpt}</BlogCardDescription>
    </BlogCardContainer>
  );
};

export default BlogCard;
