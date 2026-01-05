import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), "src/app/blogs/posts");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Posts directory does not exist:", postsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title || slug.replace(/-/g, " "),
        date: data.date || "2025-12-28",
        excerpt: data.excerpt || "Click to read more...",
        category: data.category || "General",
        readTime: data.readTime || 3,
        image: data.image || null,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    date: data.date || "2025-12-28",
    excerpt: data.excerpt || "",
    category: data.category || "General",
    readTime: data.readTime || 3,
    image: data.image || null,
  };
}
