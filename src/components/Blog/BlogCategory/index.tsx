import { BlogCategoryContainer } from "./style";

const BlogCategory = ({ category }: { category: string }) => {
  return <BlogCategoryContainer>{category}</BlogCategoryContainer>;
};

export default BlogCategory;
