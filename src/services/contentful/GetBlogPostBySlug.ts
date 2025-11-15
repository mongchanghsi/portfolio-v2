import { BlogPost } from "./types";
import { contentfulFetch } from "./utils";

const GET_BLOG_POST_BY_SLUG = `
  query GetBlogPostBySlug($slug: String!) {
    blogPostCollection(where: { slug: $slug }, limit: 1) {
      items {
        sys { id }
        title
        slug
        excerpt
        body
        publishDate
        isFeatured
        heroImage { url(transform: { width: 1600, quality: 80, format: JPG }) title }
        author { ... on Author { name } }
        categoriesCollection { items { ... on Category { name } } }
        tagsCollection { items { ... on Tag { name } } }
      }
    }
  }
`;

// slug: testpost
const getBlogPostBySlug = async (slug: string, preview = false) => {
  type Resp = {
    blogPostCollection: {
      items: Array<BlogPost>;
    };
  };

  const { blogPostCollection } = await contentfulFetch<Resp>(
    GET_BLOG_POST_BY_SLUG,
    { slug },
    { preview, revalidate: 60 }
  );

  return blogPostCollection.items[0] ?? null;
};

export default getBlogPostBySlug;
