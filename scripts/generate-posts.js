const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const readingTime = require('reading-time');

const postsDirectory = path.join(__dirname, '../src/content/blog');
const outputFile = path.join(__dirname, '../src/lib/posts.json');

function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        content,
        readingTime: readingTime(content).text,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

const posts = getAllPosts();
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log(`Generated ${posts.length} posts in ${outputFile}`);