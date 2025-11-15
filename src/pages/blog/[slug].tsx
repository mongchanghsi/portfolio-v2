import getBlogPostBySlug from "@/services/contentful/GetBlogPostBySlug";
import { BlogPost } from "@/services/contentful/types";
import BlogPostView from "@/views/Blog/Post";
import { GetServerSideProps } from "next";

type Props = {
  post: BlogPost | null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;

  if (!slug || Array.isArray(slug)) {
    return { notFound: true };
  }

  const post = await getBlogPostBySlug(slug);

  if (!post) return { notFound: true };

  return {
    props: { post },
  };
};

const BlogPostPage = ({ post }: Props) => {
  if (!post) return <></>;
  return <BlogPostView post={post} />;
};

export default BlogPostPage;

// export default function BlogPostPage({
//   post,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <Spinner />;
//   }

//   if (!post) {
//     return <p>Post not found</p>;
//   }

//   return (
//     <article className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral">
//       <h1>{post.title}</h1>
//       <p className="text-sm text-neutral-500">
//         {new Date(post.publishDate).toLocaleDateString()}
//         {post.author?.name ? ` • ${post.author.name}` : null}
//       </p>

//       {/* {post.heroImage?.url && (
//         <div className="relative my-6 aspect-[16/9] w-full overflow-hidden rounded-lg">
//           <Image
//             src={post.heroImage.url}
//             alt={post.heroImage.title || post.title}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 700px"
//             priority
//           />
//         </div>
//       )} */}

//       {/* Body is a Text field (long text) */}
//       {post.body?.split("\n").map((para, i) => (
//         <p key={i}>{para}</p>
//       ))}

//       {(post.categoriesCollection?.items?.length ||
//         post.tagsCollection?.items?.length) && (
//         <div className="mt-8 flex flex-wrap gap-2">
//           {post.categoriesCollection?.items?.map((c, i) => (
//             <span
//               key={`c-${i}`}
//               className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700"
//             >
//               {c.title}
//             </span>
//           ))}
//           {post.tagsCollection?.items?.map((t, i) => (
//             <span
//               key={`t-${i}`}
//               className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700"
//             >
//               {t.title}
//             </span>
//           ))}
//         </div>
//       )}
//     </article>
//   );
// }
