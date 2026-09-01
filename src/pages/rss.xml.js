import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/blog";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getPublishedPosts();
  return rss({
    title: "Shardul Kavar's Blog",
    description:
      "Technical articles, software architecture insights, and engineering guides by Shardul Kavar.",
    site: context.site,
    customData: `<language>en-us</language>`,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishAt,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body || "")),
      link: `/blog/${post.id}/`,
    })),
  });
}
