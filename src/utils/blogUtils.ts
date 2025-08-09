import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  published: boolean;
  content: string;
}

export interface BlogPostMeta {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  published: boolean;
}

// List of all blog post files (you'll need to update this when adding new posts)
const BLOG_POST_FILES = [
  'dont-believe-what-you-think.md',
  '自由意志.md'
];

export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const posts: BlogPostMeta[] = [];
  
  for (const fileName of BLOG_POST_FILES) {
    try {
      const response = await fetch(`/blog-posts/${fileName}`);
      if (response.ok) {
        const markdown = await response.text();
        const { data } = matter(markdown);
        
        const id = fileName.replace('.md', '');
        posts.push({
          id,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || '5 min read',
          category: data.category || 'General',
          excerpt: data.excerpt || '',
          published: data.published ?? false
        });
      }
    } catch (error) {
      console.error(`Error loading blog post ${fileName}:`, error);
    }
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const fileName = `${id}.md`;
    const response = await fetch(`/blog-posts/${fileName}`);
    
    if (!response.ok) {
      return null;
    }
    
    const markdown = await response.text();
    const { data, content } = matter(markdown);
    
    return {
      id,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      readTime: data.readTime || '5 min read',
      category: data.category || 'General',
      excerpt: data.excerpt || '',
      published: data.published ?? false,
      content
    };
  } catch (error) {
    console.error(`Error loading blog post ${id}:`, error);
    return null;
  }
}

export function getPublishedPosts(posts: BlogPostMeta[]): BlogPostMeta[] {
  return posts.filter(post => post.published);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
