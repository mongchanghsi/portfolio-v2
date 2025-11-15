import useBlog from "@/hooks/Blog";
import { BlogListContainer } from "./style";
import BlogCard from "../BlogCard";

const BlogList = () => {
  const { data, loading } = useBlog({ autoLoad: true });

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <BlogListContainer>
      {data.map((blog) => (
        <BlogCard key={blog.slug} data={blog} />
      ))}
    </BlogListContainer>
  );
};

export default BlogList;
