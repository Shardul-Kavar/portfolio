import { getCollection, type CollectionEntry } from "astro:content";

export async function getPublishedPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");
  const now = new Date();
  return posts
    .filter((post) => post.data.publishAt <= now)
    .sort((a, b) => b.data.publishAt.getTime() - a.data.publishAt.getTime());
}

