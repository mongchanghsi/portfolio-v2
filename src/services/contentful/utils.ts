import environment from "@/configuration/environment";

const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${environment.CONTENTFUL_SPACE_ID}/environments/${environment.CONTENTFUL_ENV_ID}`;

type GQLResponse<T> = { data?: T; errors?: Array<{ message: string }> };

export const contentfulFetch = async <T>(
  query: string,
  variables?: Record<string, any>,
  opts?: { preview?: boolean; revalidate?: number | false } // false = no ISR, 0 = no-cache
): Promise<T> => {
  const preview = !!opts?.preview && !!environment.CONTENTFUL_PREVIEW_TOKEN;
  const token = preview
    ? environment.CONTENTFUL_PREVIEW_TOKEN!
    : environment.CONTENTFUL_CDA_TOKEN;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    // Revalidate for ISR; default 60s
    next: {
      revalidate: typeof opts?.revalidate === "number" ? opts.revalidate : 60,
    },
  });

  const json = (await res.json()) as GQLResponse<T>;
  if (!res.ok || json.errors) {
    throw new Error(
      `Contentful error: ${JSON.stringify(json.errors ?? json, null, 2)}`
    );
  }
  return json.data as T;
};
