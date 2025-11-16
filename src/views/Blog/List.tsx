import BlogList from "@/components/Blog/BlogList";
import { GenericContainer, GenericContent } from "../GenericLayout";
import { BlogPostTitle, BlogWrapper } from "./style";
import BlogNavigationBar from "@/components/shared/BlogNavigationBar";

const BlogListView = () => {
  return (
    <GenericContainer>
      <GenericContent style={{ maxWidth: "1000px" }}>
        <BlogNavigationBar />
        <BlogWrapper>
          <BlogPostTitle>Tech Blog</BlogPostTitle>
          <BlogList />
        </BlogWrapper>
      </GenericContent>
    </GenericContainer>
  );
};

export default BlogListView;
