import { useCallback, useEffect, useRef, useState } from "react";
import getBlogPostBySlug from "@/services/contentful/GetBlogPostBySlug";
import getBlogPosts from "@/services/contentful/GetBlogPosts";
import { BlogPost } from "@/services/contentful/types";

type UseBlogOptions = {
  pageSize?: number;
  autoLoad?: boolean;
};

const DEFAULT_PAGE_SIZE = 5;

const useBlog = (options: UseBlogOptions = {}) => {
  const { pageSize = DEFAULT_PAGE_SIZE, autoLoad = true } = options;

  const [data, setData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const isFetchingRef = useRef<boolean>(false);

  const fetchBlogs = useCallback(async () => {
    if (isFetchingRef.current) return;
    if (!hasMore) return;

    isFetchingRef.current = true;
    setError(null);

    if (data.length === 0) {
      setLoading(true);
    }

    try {
      const offset = data.length;
      const res = await getBlogPosts(pageSize, offset);
      setData((prev) => [...prev, ...res.items]);
      setTotal(res.total);

      const newTotal = offset + res.items.length;
      if (newTotal >= res.total) {
        setHasMore(false);
      }
    } catch (e: unknown) {
      console.error("useBlog.fetchBlogs error:", e);
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      isFetchingRef.current = false;
      setLoading(false);
    }
  }, [data.length, hasMore, pageSize]);

  const fetchBlogBySlug = useCallback(async (slug: string) => {
    try {
      return await getBlogPostBySlug(slug);
    } catch (e: unknown) {
      console.error("useBlog.fetchBlogBySlug error:", e);
      throw e;
    }
  }, []);

  const reset = useCallback(() => {
    setData([]);
    setTotal(null);
    setHasMore(true);
    setError(null);
  }, []);

  useEffect(() => {
    if (autoLoad) {
      fetchBlogs();
    }
  }, [autoLoad, fetchBlogs]);

  return {
    data,
    loading,
    error,
    total,
    hasMore,
    fetchBlogs,
    fetchBlogBySlug,
    reset,
  };
};

export default useBlog;
