import useBlog from "@/hooks/Blog";
import {
  BlogListPreviewContainer,
  BlogListPreviewSeeMore,
  BlogListPreviewTitle,
  BlogListPreviewWrapper,
} from "./style";
import BlogCard from "../BlogCard";
import Spinner from "@/components/shared/Loaders/Spinner";
import { useRouter } from "next/router";

const PREVIEW_COUNT = 5;

const BlogListPreview = () => {
  const router = useRouter();

  const { data, loading } = useBlog({ autoLoad: true });

  if (loading) {
    return <Spinner />;
  }

  return (
    <BlogListPreviewWrapper>
      <BlogListPreviewTitle>Tech Blog</BlogListPreviewTitle>
      <BlogListPreviewContainer>
        {data.slice(0, PREVIEW_COUNT).map((blog) => (
          <BlogCard key={blog.slug} data={blog} />
        ))}

        {data.length > PREVIEW_COUNT && (
          <BlogListPreviewSeeMore onClick={() => router.push("/blog")}>
            See more posts
          </BlogListPreviewSeeMore>
        )}
      </BlogListPreviewContainer>
    </BlogListPreviewWrapper>
  );
};

export default BlogListPreview;
