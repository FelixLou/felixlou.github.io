#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://felixlou.github.io';
const BLOG_POSTS_DIR = path.join(__dirname, '..', 'public', 'blog-posts');
const OUTPUT_DIR = path.join(__dirname, '..', 'public');
const RSS_FILE = 'rss.xml';

// List of blog post files (same as in blogUtils.ts)
const BLOG_POST_FILES = [
  'content-creation-tool.md',
  'dont-believe-what-you-think.md',
  '自由意志.md',
  'website-journey.md',
  'hong-kong-travel.md',
  'shenzhen-travel.md',
  'hanoi-travel.md',
  'singapore-travel.md',
  'southeast-asia-expenses.md',
  'guangzhou-travel.md',
  'bangkok-travel.md',
  'malaysia-travel.md',
  'product-launch-journey.md',
  'southeast-asia-journey.md'
];

function escapeXml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRssItem(post) {
  const postUrl = `${SITE_URL}/blog/${post.id}`;
  const pubDate = new Date(post.date).toUTCString();
  
  // Extract first paragraph or use excerpt
  let description = post.excerpt;
  if (!description && post.content) {
    // Get first paragraph from content
    const firstParagraph = post.content.split('\n\n')[0];
    description = firstParagraph.replace(/[#*`]/g, '').substring(0, 200) + '...';
  }
  
  return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <category>${escapeXml(post.category)}</category>
    </item>`;
}

function generateRssFeed(posts) {
  const buildDate = new Date().toUTCString();
  
  const rssHeader = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Jiabin Lu's Blog</title>
    <link>${SITE_URL}</link>
    <description>Insights on building systems, leveraging technology, and creating meaningful impact through software, content, and AI.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />`;

  const rssItems = posts.map(post => generateRssItem(post)).join('');
  
  const rssFooter = `
  </channel>
</rss>`;

  return rssHeader + rssItems + rssFooter;
}

async function loadBlogPosts() {
  const posts = [];
  
  for (const fileName of BLOG_POST_FILES) {
    try {
      const filePath = path.join(BLOG_POSTS_DIR, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      // Only include published posts in RSS feed
      if (data.published !== false) {
        posts.push({
          id: fileName.replace('.md', ''),
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString().split('T')[0],
          category: data.category || 'General',
          excerpt: data.excerpt || '',
          content: content,
          readTime: data.readTime || '5 min read'
        });
      }
    } catch (error) {
      console.error(`Warning: Could not load ${fileName}:`, error.message);
    }
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

async function main() {
  console.log('Generating RSS feed...');
  
  try {
    // Load all blog posts
    const posts = await loadBlogPosts();
    console.log(`Found ${posts.length} published blog posts`);
    
    // Generate RSS feed
    const rssFeed = generateRssFeed(posts);
    
    // Write RSS file
    const outputPath = path.join(OUTPUT_DIR, RSS_FILE);
    fs.writeFileSync(outputPath, rssFeed, 'utf-8');
    
    console.log(`✅ RSS feed generated successfully at: ${outputPath}`);
    console.log(`   Feed URL will be: ${SITE_URL}/${RSS_FILE}`);
    
    // Also copy to docs directory if it exists (for GitHub Pages)
    const docsDir = path.join(__dirname, '..', 'docs');
    if (fs.existsSync(docsDir)) {
      const docsOutputPath = path.join(docsDir, RSS_FILE);
      fs.writeFileSync(docsOutputPath, rssFeed, 'utf-8');
      console.log(`✅ RSS feed also copied to docs directory`);
    }
    
  } catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
  }
}

// Run the script
main();