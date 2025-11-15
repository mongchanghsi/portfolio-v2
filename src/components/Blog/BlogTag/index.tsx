import { BlogTagContainer } from "./style";

const BlogTag = ({ tag }: { tag: string }) => {
  return <BlogTagContainer>{tag}</BlogTagContainer>;
};

export default BlogTag;
