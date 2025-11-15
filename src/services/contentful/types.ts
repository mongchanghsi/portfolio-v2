export type BlogPost = {
  sys: { id: string };
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  publishDate: string;
  isFeatured?: boolean | null;
  heroImage?: { url: string; title?: string | null } | null;
  author?: BlogAuthor | null;
  categoriesCollection?: {
    items: Array<BlogCategory>;
  } | null;
  tagsCollection?: { items: Array<BlogTag> } | null;
};

export type BlogAuthor = {
  name?: string | null;
};

export type BlogCategory = {
  name?: string | null;
};

export type BlogTag = {
  name?: string | null;
};
