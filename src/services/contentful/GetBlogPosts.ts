import { BlogPost } from "./types";
import { contentfulFetch } from "./utils";

const GET_BLOG_POSTS = `
  query GetBlogPosts($limit: Int!, $skip: Int!) {
    blogPostCollection(limit: $limit, skip: $skip, order: publishDate_DESC) {
      total
      items {
        sys { id }
        title
        slug
        excerpt
        body
        publishDate
        isFeatured
        heroImage {
          url(transform: { width: 800 })
          title
        }
        categoriesCollection {
          items {
            ... on Category {
              name
            }
          }
        }
        tagsCollection {
          items {
            ... on Tag {
              name
            }
          }
        }
      }
    }
  }
`;

const getBlogPosts = async (limit = 5, skip = 0, preview = false) => {
  type Resp = {
    blogPostCollection: {
      total: number;
      items: Array<BlogPost>;
    };
  };

  const data = await contentfulFetch<Resp>(
    GET_BLOG_POSTS,
    { limit, skip },
    { preview, revalidate: 60 }
  );

  return data.blogPostCollection;
};

export default getBlogPosts;
