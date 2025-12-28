import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/app/blogs/posts');

export function getAllPosts() {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Posts directory does not exist:', postsDirectory);
    return [];
  }

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read the file content
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Extract frontmatter using regex
      const frontmatterMatch = fileContents.match(/export const frontmatter = \{([^}]+)\}/s);
      
      let frontmatter = {
        title: slug.replace(/-/g, ' '),
        date: '2025-12-28',
        excerpt: 'Click to read more...',
        category: 'General',
        readTime: 3,
      };

      if (frontmatterMatch) {
        try {
          // Extract the frontmatter object content
          const frontmatterStr = frontmatterMatch[1];
          
          // Parse individual fields
          const titleMatch = frontmatterStr.match(/title:\s*['"]([^'"]+)['"]/);
          const dateMatch = frontmatterStr.match(/date:\s*['"]([^'"]+)['"]/);
          const excerptMatch = frontmatterStr.match(/excerpt:\s*['"]([^'"]+)['"]/);
          const categoryMatch = frontmatterStr.match(/category:\s*['"]([^'"]+)['"]/);
          const readTimeMatch = frontmatterStr.match(/readTime:\s*(\d+)/);

          frontmatter = {
            title: titleMatch ? titleMatch[1] : frontmatter.title,
            date: dateMatch ? dateMatch[1] : frontmatter.date,
            excerpt: excerptMatch ? excerptMatch[1] : frontmatter.excerpt,
            category: categoryMatch ? categoryMatch[1] : frontmatter.category,
            readTime: readTimeMatch ? parseInt(readTimeMatch[1]) : frontmatter.readTime,
          };
        } catch (error) {
          console.error(`Error parsing frontmatter for ${fileName}:`, error);
        }
      }

      return {
        slug,
        ...frontmatter,
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
}