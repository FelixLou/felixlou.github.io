#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const MEDIUM_API_URL = 'https://api.medium.com/v1';
const BLOG_POSTS_DIR = path.join(__dirname, '..', 'public', 'blog-posts');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

class MediumPublisher {
  constructor(token) {
    this.token = token;
    this.userId = null;
  }

  async getUser() {
    try {
      const response = await fetch(`${MEDIUM_API_URL}/me`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to get user info: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      this.userId = result.data.id;
      return result.data;
    } catch (error) {
      console.error(`${colors.red}Error fetching user info:${colors.reset}`, error.message);
      throw error;
    }
  }

  async publishPost(title, content, tags = [], publishStatus = 'draft', canonicalUrl = null) {
    if (!this.userId) {
      await this.getUser();
    }

    const postData = {
      title,
      contentFormat: 'markdown',
      content,
      tags: tags.slice(0, 5), // Medium allows max 5 tags
      publishStatus
    };

    if (canonicalUrl) {
      postData.canonicalUrl = canonicalUrl;
    }

    try {
      const response = await fetch(`${MEDIUM_API_URL}/users/${this.userId}/posts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to publish post: ${response.status} ${response.statusText}\n${errorText}`);
      }

      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error(`${colors.red}Error publishing post:${colors.reset}`, error.message);
      throw error;
    }
  }
}

async function loadBlogPost(fileName) {
  const filePath = path.join(BLOG_POSTS_DIR, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { metadata: data, content, fileName };
}

async function getAllBlogPosts() {
  const files = fs.readdirSync(BLOG_POSTS_DIR).filter(file => file.endsWith('.md'));
  const posts = [];
  
  for (const file of files) {
    try {
      const post = await loadBlogPost(file);
      posts.push(post);
    } catch (error) {
      console.error(`${colors.yellow}Warning: Could not load ${file}:${colors.reset}`, error.message);
    }
  }
  
  return posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
}

async function selectPost(posts) {
  console.log(`\n${colors.cyan}Available blog posts:${colors.reset}`);
  posts.forEach((post, index) => {
    const status = post.metadata.published ? colors.green + '●' : colors.yellow + '○';
    const date = new Date(post.metadata.date).toLocaleDateString();
    console.log(`${status} ${colors.bright}${index + 1}.${colors.reset} ${post.metadata.title} (${date})`);
  });

  const selection = await question(`\n${colors.cyan}Enter post number to publish (or 'q' to quit): ${colors.reset}`);
  
  if (selection.toLowerCase() === 'q') {
    return null;
  }

  const index = parseInt(selection) - 1;
  if (index >= 0 && index < posts.length) {
    return posts[index];
  }

  console.log(`${colors.red}Invalid selection. Please try again.${colors.reset}`);
  return selectPost(posts);
}

async function confirmPublish(post) {
  console.log(`\n${colors.cyan}Post to publish:${colors.reset}`);
  console.log(`  ${colors.bright}Title:${colors.reset} ${post.metadata.title}`);
  console.log(`  ${colors.bright}Date:${colors.reset} ${post.metadata.date}`);
  console.log(`  ${colors.bright}Category:${colors.reset} ${post.metadata.category || 'General'}`);
  console.log(`  ${colors.bright}Read Time:${colors.reset} ${post.metadata.readTime || '5 min read'}`);
  
  const publishStatus = await question(`\n${colors.cyan}Publish as (1) Draft or (2) Public? [1]: ${colors.reset}`);
  const status = publishStatus === '2' ? 'public' : 'draft';
  
  const canonicalUrl = await question(`${colors.cyan}Canonical URL (press Enter to skip): ${colors.reset}`);
  
  const tags = await question(`${colors.cyan}Tags (comma-separated, max 5, press Enter to skip): ${colors.reset}`);
  const tagArray = tags ? tags.split(',').map(t => t.trim()).filter(t => t) : [];
  
  const confirm = await question(`\n${colors.yellow}Publish to Medium as ${status}? (y/n): ${colors.reset}`);
  
  if (confirm.toLowerCase() === 'y') {
    return { status, canonicalUrl: canonicalUrl || null, tags: tagArray };
  }
  
  return null;
}

async function main() {
  console.log(`${colors.bright}${colors.cyan}Medium Blog Publisher${colors.reset}`);
  console.log(`${colors.cyan}${'='.repeat(50)}${colors.reset}\n`);

  // Check for token in environment variable or ask for it
  let token = process.env.MEDIUM_TOKEN;
  
  if (!token) {
    console.log(`${colors.yellow}No MEDIUM_TOKEN environment variable found.${colors.reset}`);
    console.log('To get your token: Go to Medium > Settings > Security and apps > Integration tokens\n');
    token = await question(`${colors.cyan}Enter your Medium integration token: ${colors.reset}`);
    
    if (!token) {
      console.log(`${colors.red}Token is required. Exiting.${colors.reset}`);
      process.exit(1);
    }
  }

  const publisher = new MediumPublisher(token);

  try {
    // Get user info
    console.log(`\n${colors.cyan}Authenticating...${colors.reset}`);
    const user = await publisher.getUser();
    console.log(`${colors.green}✓ Logged in as: ${user.name} (@${user.username})${colors.reset}`);

    // Load blog posts
    console.log(`\n${colors.cyan}Loading blog posts...${colors.reset}`);
    const posts = await getAllBlogPosts();
    console.log(`${colors.green}✓ Found ${posts.length} blog posts${colors.reset}`);

    // Main loop
    let continuePublishing = true;
    while (continuePublishing) {
      // Select post
      const selectedPost = await selectPost(posts);
      if (!selectedPost) {
        break;
      }

      // Confirm and get publish options
      const publishOptions = await confirmPublish(selectedPost);
      if (!publishOptions) {
        continue;
      }

      // Publish to Medium
      console.log(`\n${colors.cyan}Publishing to Medium...${colors.reset}`);
      
      try {
        // Prepare content with proper formatting
        let content = selectedPost.content;
        
        // Add a note at the end if canonical URL is not provided
        if (!publishOptions.canonicalUrl) {
          const baseUrl = 'https://felixlou.github.io';
          const postUrl = `${baseUrl}/blog/${selectedPost.fileName.replace('.md', '')}`;
          content += `\n\n---\n\n*Originally published at [${postUrl}](${postUrl})*`;
        }
        
        const result = await publisher.publishPost(
          selectedPost.metadata.title,
          content,
          publishOptions.tags,
          publishOptions.status,
          publishOptions.canonicalUrl
        );
        
        console.log(`${colors.green}✓ Successfully published!${colors.reset}`);
        console.log(`  ${colors.bright}URL:${colors.reset} ${result.url}`);
        console.log(`  ${colors.bright}ID:${colors.reset} ${result.id}`);
        console.log(`  ${colors.bright}Status:${colors.reset} ${result.publishStatus}`);
      } catch (error) {
        console.error(`${colors.red}✗ Failed to publish${colors.reset}`);
      }

      const another = await question(`\n${colors.cyan}Publish another post? (y/n): ${colors.reset}`);
      continuePublishing = another.toLowerCase() === 'y';
    }

  } catch (error) {
    console.error(`${colors.red}Error:${colors.reset}`, error.message);
    process.exit(1);
  } finally {
    rl.close();
  }

  console.log(`\n${colors.cyan}Goodbye!${colors.reset}`);
}

// Run the script
main().catch(error => {
  console.error(`${colors.red}Unexpected error:${colors.reset}`, error);
  process.exit(1);
});